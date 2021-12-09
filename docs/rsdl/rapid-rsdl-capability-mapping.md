---
id: rsdl-capability-mapping
title: Capability mapping
sidebar_label: RSDL Capability mapping to CSDL
---

#  RSDL Capability mapping to CSDL


## delete

```RSDL
path /skus/{id} {
    DELETE
} 
```

```XML
 <Annotations Target="skus">
  <Annotation Term="Org.OData.Capabilities.V1.DeleteRestrictions">
    <Record Type="Org.OData.Capabilities.V1.DeleteRestrictionsType">
      <PropertyValue Property="Deletable" Bool="true" />
    </Record>
  </Annotation>
</Annotations>
```

## update

```RSDL
path /skus/{id} {
    PATCH {
        excluded { id releaseDate }
    }
}
```

```XML
<Annotations Target="skus">
  <Annotation Term="Org.OData.Capabilities.V1.UpdateRestrictions">
    <Record Type="Org.OData.Capabilities.V1.UpdateRestrictionsType">
      <PropertyValue Property="Updatable" Bool="true" />
      <PropertyValue Property="NonUpdatableProperties">
        <Collection>
          <PropertyPath>id</PropertyPath>
          <PropertyPath>releaseDate</PropertyPath>
        </Collection>
      </PropertyValue>
    </Record>
  </Annotation>
</Annotations>
```

## insert

```RSDL
path /orders {
    POST {    
        required { externalId }
        excluded { id orderDate }
    }
}
```

```XML
<Annotations Target="orders">
  <Annotation Term="Org.OData.Capabilities.V1.InsertRestrictions">
    <Record Type="Org.OData.Capabilities.V1.InsertRestrictionsType">
      <PropertyValue Property="Insertable" Bool="true" />
      <PropertyValue Property="RequiredProperties">
        <Collection>
          <PropertyPath>id</PropertyPath>
          <PropertyPath>orderDate</PropertyPath>
        </Collection>
      </PropertyValue>
      <PropertyValue Property="NonInsertableProperties">
        <Collection>
          <PropertyPath>id</PropertyPath>
          <PropertyPath>orderDate</PropertyPath>
        </Collection>
      </PropertyValue>
    </Record>
  </Annotation>
</Annotations>
```

```JSON
"$Annotations": {
  "orders": {
    "@Org.OData.Capabilities.V1.InsertRestrictions": {
      "$Type": "Org.OData.Capabilities.V1.InsertRestrictionsType",
      "Insertable": true,
      "RequiredProperties": [
        "id",
        "orderDate"
      ],
      "NonInsertableProperties": [
        "id",
        "orderDate"
      ]
    }
  }
}
```

## paging

```RSDL
path /skus {
    GET { 
        paging 
    }
}         
```

```XML
<Annotations Target="skus">
  <Annotation Term="Org.OData.Capabilities.V1.TopSupported" Bool="true" />
  <Annotation Term="Org.OData.Capabilities.V1.SkipSupported" Bool="true" />
</Annotations>
```

## filtering

```RSDL
path /orders {
    GET { 
        filter { 
            eq     { id name description createdDate fulfillmentDate }
            ranges { createdDate description }
            prefix { name }
            text   { description }    
        }
    }
}    
```

```JSON
"$Annotations": {
  "orders": {
    "@Org.OData.Capabilities.V1.FilterRestrictions": {
      "$Type": "Org.OData.Capabilities.V1.FilterRestrictionsType",
      "Filterable": true,
      "FilterExpressionRestrictions": [
        {
          "$Type": "Org.OData.Capabilities.V1.FilterExpressionRestrictionType",
          "Property": "id",
          "AllowedExpressions": "SingleValue"
        },
        {
          "$Type": "Org.OData.Capabilities.V1.FilterExpressionRestrictionType",
          "Property": "name",
          "AllowedExpressions": "SingleValue"
        },
        // some FilterExpressionRestrictionType removed for readability
        {
          "$Type": "Org.OData.Capabilities.V1.FilterExpressionRestrictionType",
          "Property": "description",
          "AllowedExpressions": "SearchExpression"
        }
      ]
    }
  }
```
