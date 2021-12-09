

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

FilterExpressionRestrictions is a list of FilterExpressionRestrictionType, that in itself is a pair of a property name one of the literal values :

| value                        | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SingleValue                  | Property can be used in a single `eq` clause                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| MultiValue                   | Property can be used in multiple `eq` and `in` clauses, combined by `or` (which is logically equivalent to a single `in` clause)                                                                                                                                                                                                                                                                                                                                                                   |
| SingleRange                  | Property can be used in at most one `ge` and/or one `le` clause, separated by `and`                                                                                                                                                                                                                                                                                                                                                                                                                |
| MultiRange                   | Property can be compared to a union of one or more closed, half-open, or open intervals" <br/> The filter expression for this property consists of one or more interval expressions combined by `or`. A single interval expression is either a single comparison of the property and a literal value with `eq`, `le`, `lt`, `ge`, or `gt`, or pair of boundaries combined by `and` and enclosed in parentheses. The lower boundary is either `ge` or `gt`, the upper boundary either `le` or `lt`. |
| SearchExpression             | String property can be used as first operand in `startswith`, `endswith`, and `contains` clauses"                                                                                                                                                                                                                                                                                                                                                                                                  |
| MultiRangeOrSearchExpression | Property can be compared to a union of zero or more closed, half-open, or open intervals plus zero or more simple string patterns" <br/> The filter expression for this property consists of one or more interval expressions or string comparison functions combined by `or`. See MultiRange for a definition of an interval expression. See SearchExpression for the allowed string comparison functions.                                                                                        |


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

```javascript 
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


# expansion

```RSDL
path /orders {
    GET { 
        expand {
            items { 
                expand { 
                    sku
                }
            }    
        }
    }
}
```

```XML
<Annotations Target="orders">
  <Annotation Term="Org.OData.Capabilities.V1.ExpandRestrictions">
    <Record Type="Org.OData.Capabilities.V1.ExpandRestrictionsType">
      <PropertyValue Property="Expandable" Bool="true" />
    </Record>
  </Annotation>
</Annotations>
<Annotations Target="orders/items">
  <Annotation Term="Org.OData.Capabilities.V1.ExpandRestrictions">
    <Record Type="Org.OData.Capabilities.V1.ExpandRestrictionsType">
      <PropertyValue Property="Expandable" Bool="true" />
    </Record>
  </Annotation>
</Annotations>

```

