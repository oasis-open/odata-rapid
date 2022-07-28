const builder = require('xmlbuilder');

function serializeToXml(jsonCsdl, pretty = true) 
{
  const entityContainerName = jsonCsdl.$EntityContainer;
  const namespace = entityContainerName.substring(entityContainerName, entityContainerName.lastIndexOf('.'));

  // Write Edmx wrapper
  // <edmx:Edmx xmlns:edmx="http://docs.oasis-open.org/odata/ns/edmx" Version="4.0">
  //   <edmx:DataServices>

  const xmlElement = builder.begin().dec()
    .ele('edmx:Edmx')
      .att('xmlns:edmx','http://docs.oasis-open.org/odata/ns/edmx')
      .att('Version','4.0');

  // Write References
  if(jsonCsdl.$References)
  {
    writeReferences(xmlElement, jsonCsdl.$References);
  }

  // Write Schema Element
  //     <Schema xmlns="http://docs.oasis-open.org/odata/ns/edm" Namespace="Jetsons">
  const dataServiceElement = xmlElement.ele('Schema');
  const schema = dataServiceElement
    .att('xmlns','http://docs.oasis-open.org/odata/ns/edm')
    .att('Namespace', namespace);

  const model = jsonCsdl[namespace];
  
  // write model elements
  for(const key of Object.keys(model)) 
  {
    const modelElement = model[key];
    if (Array.isArray(modelElement))
    {
      handleOperation(schema, key, modelElement);
    }
    else if (key == '$Alias')
    {
      schema.att("Alias", modelElement);
    }
    else if (key=='$Annotations')
    {
      writeAnnotationsElement(schema, modelElement);
    }
    else 
    {
      switch (modelElement.$Kind)
      {
        case 'EntityType':
          writeEntityType(schema, key, modelElement);
          break;
        case 'ComplexType':
          writeComplexType(schema, key, modelElement);
          break;
        case 'EnumType':
          writeEnumType(schema, key, modelElement);
          break;
        case 'TypeDefinition':
          writeTypeDefinition(schema, key, modelElement);
          break;
        case 'EntityContainer':
          writeEntityContainer(schema, key, modelElement);
          break;
        default:
          console.log(`Unexpected Schema Element ${key}`);
      }
    }
  }

  return xmlElement.end(
    {
      pretty: pretty
    });
}

function writeEntityType(parentElement, name, type)
{
  // write Entity element
  // <EntityType Name="Employee">
  const entity = parentElement.ele('EntityType')
    .att('Name', name);

  // write Key element first
  const keys = type.$Key;
  if (keys?.length > 0)
  {
    // <Key>
    const keyElement = entity.ele('Key');

    keys.forEach((key)=>
    {
    //   <PropertyRef Name="Id"/>
      keyElement.ele('PropertyRef')
        .att('Name', key);
    });
  }

  // write base, abstract, open attributes
  writeTypeMembers(entity, type);
}

function writeComplexType(parentElement, typeName, type)
{
  // write ComplexType element
  // <ComplexType Name="FullName">
  const complex = parentElement.ele('ComplexType')
    .att('Name', typeName);

  // write complex type
  writeTypeMembers(complex, type);
}

function writeTypeMembers(typeElement, type)
{
  for(const key of Object.keys(type))
  {
    switch(key)
    {
      case '$Key':
        //ignore -- key element already written
      case '$Kind':
        // ignore
        break;
      case '$BaseType':
        // write BaseType attribute
        typeElement.att('BaseType', type.$BaseType);
        break;
      case '$Abstract':
        if (type.$Abstract == true)
        {
          // write Abstract attribute
          typeElement.att('Abstract', 'true');
        }
        break;
      case '$OpenType':
        if (type.$OpenType == true)
        {
          // write OpenType attribute
          typeElement.att('OpenType', 'true');
        }
        break;
      default:
        if(key[0]=='@')
        {
          // writeAnnotation
          writeAnnotation(typeElement, key, type[key]);
        }
        else
        {
          // write property
          writeProperty(typeElement, key, type[key]);
        }
    }
  }
}

function writeProperty(typeElement, name, property)
{
  if(name[0] != '$')
  {
    // consider: should we group properties (first) and navigation properties (second)?
    switch(property.$Kind)
    {
      case 'NavigationProperty':
        writeNavigationProperty(typeElement, name, property);
        break;
      case 'Property':
      default:
        writeStructuralProperty(typeElement, name, property);
        break;
    }
  }
}

function writeStructuralProperty(typeElement, propertyName, property)
{
  // write Property
  // <Property Name="firstName" Type="Edm.String"/>
  const propertyElement = typeElement.ele('Property')
    .att('Name', propertyName);

  writeTypeUsage(propertyElement, property);

  writeAnnotations(propertyElement, property);
}

function writeNavigationProperty(typeElement, propertyName, property)
{
  // write NavigationProperty
  // <NavigationProperty Name="employees" Type="Collection(Jetsons.Employee)"/>
  const propertyElement = typeElement.ele('NavigationProperty')
    .att('Name', propertyName);

  // write common property attributes
  writeTypeUsage(propertyElement, property);

  // write ContainsTarget attribute
  if(property.$ContainsTarget != null && property.$ContainsTarget == true)
  {
    propertyElement.att('ContainsTarget','true');
  }

  writeAnnotations(propertyElement, property);

  // writeReferentialConstraints
  writeReferentialConstraints(propertyElement, property);
}

// write common attributes for a type usage (property, parameter, returntype)
function writeTypeUsage(element, typeUsage)
{
  // write Type attribute
  let type = typeUsage.$Type == null ? "Edm.String" : typeUsage.$Type;
  if (typeUsage.$Collection == true)
  {
    type = "Collection(" + type + ")";
  }

  element.att('Type', type);

  // Write Nullable Attribute
  if(typeUsage.$Nullable == undefined || typeUsage.$Nullable == false)
  {
    element.att('Nullable','false')
  }

  // Write Default Attribute
  if(typeUsage.$Default != null)
  {
    element.att('Default', type.$Default);
  }

  if(typeUsage.$MaxLength != null)
  {
    element.att('MaxLength', type.$MaxLength);
  }

  if(typeUsage.$Precision != null)
  {
    element.att('Precision', type.$Precision);
  }

  if(typeUsage.$Scale != null)
  {
    element.att('Precision', type.$Scale);
  }

}

function writeReferentialConstraints(navigationPropertyElement, property)
{
  // todo...
}

function writeEntityContainer(xmlElement, entityContainerName, entityContainer)
{
  // Write Entity Container
  // <EntityContainer Name="Service">
  const container = xmlElement.ele('EntityContainer')
    .att('Name', entityContainerName);

  // Write Extends
  if (entityContainer.$Extends != null)
  {
    container.att('Extends', entityContainer.$Extends);
  }

  // Write Entity Container members
  for(const key of Object.keys(entityContainer))
  {
    if(key[0] == '@')
    {
      writeAnnotation(container, key, entityContainer[key]);
    }
    else if(key[0] != '$')
    {
      const containerMember = entityContainer[key];

      // check for function
      if (containerMember.$Function != undefined)
      {
        writeFunctionImport(container, key, containerMember);
      }

      // check for action
      else if(containerMember.$Action != undefined)
      {
        writeActionImport(container, key, containerMember);
      }

      // check for an entitySet
      else if(containerMember.$Collection != undefined && containerMember.$Collection == true)
      {
        writeEntitySet(container, key, containerMember);
      }

      // it's a singleton
      else
      {
        writeSingleton(container, key, containerMember);
      }
    } 
  }
}

function writeEntitySet(schemaElement, name, entitySet)
{
  // write Entity Set element
  // <EntitySet Name="competitors" EntityType="Jetsons.Company">
  const entitySetElement = schemaElement.ele('EntitySet')
    .att('Name', name)
    .att('EntityType', entitySet.$Type);
  
  writeEntitySetOrSingleton(entitySetElement, entitySet);
}

function writeSingleton(schemaElement, name, singleton)
{
    // write Singleton element
    // <Singleton Name="company" Type="Jetsons.Company">
    const singletonElement = schemaElement.ele('Singleton')
      .att('Name', name)
      .att('Type', singleton.$Type);

  writeEntitySetOrSingleton(singletonElement, singleton);
}

function writeEntitySetOrSingleton(modelElement, entitySetOrSingleton)
{
  for(const key of Object.keys(entitySetOrSingleton))
  {
    switch(key)
    {
      case '$Type':
      case '$Collection':
        // ignore -- handled elsewhere
        break;
      case '$NavigationPropertyBinding':
        writeNavigationPropertyBindings(modelElement, entitySetOrSingleton[key])
        break;
      default:
          if(key[0]=='@')
          {
            // writeAnnotation
            writeAnnotation(modelElement, key, entitySetOrSingleton[key]);
          }
          else
          {
            console.log(`Unsupported property on entity set or singleton ${key}.`);
          }
    }
  }
}

function writeNavigationPropertyBindings(modelElement, navigationPropertyBindings)
{
  // write navigation property bindings
  // <NavigationPropertyBinding Path="company" Target="Companies" />
  for(const key of Object.keys(navigationPropertyBindings))
  {
      modelElement.ele('NavigationPropertyBinding')
        .att('Path', key)
        .att('Target', navigationPropertyBindings[key]);
  }
}

function writeEnumType(schemaElement, name, enumType)
{
  //<EnumType Name="Type" Flags="true">
  const enumElement = schemaElement.ele('EnumType');

  for(const key of Object.keys(enumType))
  {
    switch(key)
    {
      case "$Flags":
        // write IsFlags attribute
        enumElement.att('IsFlags', enumType.$Flags);
        break;
      case "$UnderlingType":
        // write UnderlyingType attribute
        enumElement.att('UnderlyingType', enumType.$UnderlyingType);
        break;
      default:
        if(key[0] != '$')
        {
        // write member
        // <Member Name="A" Value="0"/>
        // consider: should we not write value if default values?
        enumElement.ele('Member')
          .att('Name', key)
          .att('Value',enumType[key]);
        }
    }
  }
}

function writeReferences(xmlElement, references)
{
  // write schema references
  for(const key of Object.keys(references))
  {    
    const reference = references[key];
    // <edmx:Reference Uri="Jetsons.azurewebsites.com"> 

    const referenceElement = xmlElement.ele('edmx:Reference')
      .att('Uri', key)

    if(reference.$Include != undefined)
    {
      reference.$Include.forEach((include)=>
      {
        //     <edmx:Include Namespace="Jetsons" Alias="Jets"/>
        referenceElement.ele('edmx:Include')
          .att('Namespace',include.$Namespace)
          .att('Alias', include.$Alias)
      });
    }

    if(reference.$IncludeAnnotations != undefined)
    {
      reference.$IncludeAnnotations.forEach((includeAnnotation)=>
      {
        //     <edmx:IncludeAnnotations TermNamespace="Jetsons" Qualifier="Jets1" TargetNamespace="annotationTerms"/>
        referenceElement.ele('edmx:IncludeAnnotations')
          .att('TermNamespace',includeAnnotation.$TermNamespace)
          .att('Qualifier', includeAnnotation.$Qualifier)
          .att('TargetNamespace', includeAnnotation.$TargetNamespace)
      });
    }  
  }
}

function handleOperation(schema, name, operation)
{
  operation.forEach((overload)=>
  {
    switch(overload.$Kind)
    {
      case 'Function':
        writeFunction(schema, name, overload);
        break;
      case 'Action':
        writeAction(schema, name, overload);
        break;
    }
  });
}

function writeAction(schemaElement, name, actionDefinition)
{
  // write action
  // <Action Name='youreFired' IsBound="true">
  const action = schemaElement.ele('Action')
    .att('Name', name);

  writeOperation(action, actionDefinition);
}

function writeFunction(schemaElement, name, functionDefinition)
{
  // write function
  // <Function Name='youreFired' IsBound="true">
  const functionElement = schemaElement.ele('Function')
    .att('Name', name);

  writeOperation(functionElement, functionDefinition);
}

function writeActionImport(entityContainer, importName, actionDefinition)
{
  // <ActionImport Name="yourFired" Action="Jetsons.yourFired" EntitySet="companies"/>
  const actionImport = entityContainer.ele('ActionImport')
    .att('Name', importName)
    .att('Action', actionDefinition.$Actioin);

  // write EntitySet attribute
  if(actionDefinition.$EntitySet != undefined)
  {
    actionImport.att('EntitySet', actionDefinition.$EntitySet);
  }
}

function writeFunctionImport(entityContainer, name, functionDefinition)
{
  // <FunctionImport Name="TopEmployees" Action="Jetsons.topEmployees" EntitySet="companies" IncludeInServiceDocument="true"/>
  const functionImport = entityContainer.ele('FunctionImport')
    .att('Name', name)
    .att('Function', functionDefinition.$Function);

  // write IncludeInServiceDocument attribute
  if(functionDefinition.$IncludeInServiceDocument == false)
  {
    functionImport.att('IncludeInServiceDocument', 'false');
  }

  // write EntitySet attribute
  if(functionDefinition.$EntitySet != undefined)
  {
    functionImport.att('EntitySet', functionDefinition.$EntitySet);
  }
}

function writeOperation(operationElement, operation)
{
  for(const key of Object.keys(operation))
  {
    switch(key)
    {
      case '$Kind':
        // do nothing
        break;
      case '$IsBound':
        if(operation.$IsBound == true)
        {
          operationElement.att('IsBound', 'true');
        }
        break;
      case '$ReturnType':
        writeReturnType(operationElement, operation.$ReturnType);
        break;
      case '$Parameter':
        writeParameters(operationElement, operation[key]);
        break;
      case '$EntitySetPath':
          operationElement.att('EntitySetPath', operation[key]);
        break;
      case '$IsComposable':
        if(operation.$IsComposable == true)
        {
          operationElement.att('IsComposable', 'true');
        }
        break;
      default:
        if(key[0]=='@')
        {
          writeAnnotation(operationElement, key, operation[key]);
        }
        else
        {
          console.log(`Not Implemented Operation Attribute ${key}.`);
        }
    }
  }
}

function writeReturnType(operationElement, returnType)
{
  // write ReturnType element
  // <ReturnType Type="Collection(Jetsons.Employee)"/>
  const returnElement = operationElement.ele('ReturnType');

  writeTypeUsage(returnElement, returnType);
}

function writeParameters(operationElement, parameters)
{
  parameters.forEach((parameter)=>
  { 
    // write parameter
    // <Parameter Name="company" Type="Jetsons.Company"/>
    const parameterElement = operationElement.ele('Parameter')
      .att('Name', parameter.$Name);
  
    writeTypeUsage(parameterElement, parameter);
  });
}

function writeTypeDefinition(schemaElement, name, typeDefinition)
{
  // todo...
}

function writeAnnotationsElement(schemaElement, annotations)
{
  // write Annotation element
  // <Annotations Target="employees">
  const annotationsElement = schemaElement.ele('Annotations')
  
  for(const key of Object.keys(annotations))
  {
    const annotationElement = annotationsElement.ele('Annotation')
      .att('Target', key);
    
    writeAnnotations(annotationElement, annotations[key]);
  }
}

function writeAnnotations(xmlElement, modelElement)
{
  // writeAnnotations
  // <Annotation Term="Org.OData.Core.V1.Description" String="description"/>
  for(const term of Object.keys(modelElement))
  {
    if(term[0]=='@')
    {
      writeAnnotation(xmlElement, term, modelElement[term]);
    }    
  }
}

function writeAnnotation(xmlElement, term, annotationValue)
{
  // write annotation
  // <Annotation Term="Org.OData.Core.V1.Description" String="description"/>
  switch (typeof(annotationValue))
  {
    case 'string':
      xmlElement.ele('Annotation')
        .att('Term', term.substring(1))
        .att('String', annotationValue);
      break;
    case 'boolean':
      xmlElement.ele('Annotation')
        .att('Term', term.substring(1))
        .att('Bool', annotationValue);
      break;
    case 'number':
      xmlElement.ele('Annotation')
        .att('Term', term.substring(1))
        .att('Decimal', annotationValue);
      break;
    case 'object':
      writeAnnotationObject(xmlElement, term.substring(1), annotationValue);
      break;
    break;
      default:
        console.log(`Annotation type ${typeof(annotationValue)} not supported for term ${term}.`);
  }
}

function writeAnnotationObject(xmlElement, term, annotationValue)
{
  if(Array.isArray(annotationValue))
  {
    writeAnnotationArray(xmlElement, term, annotationValue);
  }
  else
  {
    // todo
  }
}

function writeAnnotationArray(xmlElement, term, arrayValue)
{
  // todo...
}

module.exports = { serializeToXml };
