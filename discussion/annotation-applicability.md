https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Applicability

| Symbolic Value        | Model Element                                                   | Status  |
| --------------------- | --------------------------------------------------------------- | ------- |
| Action                | Action                                                          | &check; |
| ActionImport          | Action Import                                                   | :heavy_plus_sign:        |
| Annotation            | Annotation                                                      | :x:        |
| Apply                 | Application of a client-side function in an annotation          | :x:        |
| Cast                  | Type Cast annotation expression                                 | :x:        |
| Collection            | Entity Set or collection-valued Property or Navigation Property | :x:        |
| ComplexType           | Complex Type                                                    | &check; |
| EntityContainer       | Entity Container                                                | &check; |
| EntitySet             | Entity Set                                                      | &check; |
| EntityType            | Entity Type                                                     | &check; |
| EnumType              | Enumeration Type                                                | &check; |
| Function              | Function                                                        | &check; |
| FunctionImport        | Function Import                                                 | :heavy_plus_sign:        |
| If                    | Conditional annotation expression                               | :x:        |
| Include               | Reference to an Included Schema                                 | :question: default namespace   |
| IsOf                  | Type Check annotation expression                                | :x:        |
| LabeledElement        | Labeled Element expression                                      | :x:        |
| Member                | Enumeration Member                                              | &check; |
| NavigationProperty    | Navigation Property                                             | &check; |
| Null                  | Null annotation expression                                      | :x:        |
| OnDelete              | On-Delete Action of a navigation property                       | :x:        |
| Parameter             | Action of Function Parameter                                    | &check; |
| Property              | Property of a structured type                                   | &check; |
| PropertyValue         | Property value of a Record annotation expression                | :x:        |
| Record                | Record annotation expression                                    | :heavy_plus_sign: annotations within annotations are cool        |
| Reference             | Reference to another CSDL document                              | :x:        |
| ReferentialConstraint | Referential Constraint of a navigation property                 | :x:        |
| ReturnType            | Return Type of an Action or Function                            | &check; |
| Schema                | Schema                                                          | :question: schema version, default namespace  |
| Singleton             | Singleton                                                       | &check; |
| Term                  | Term                                                            | :x:, not in RSDL        |
| TypeDefinition        | Type Definition                                                 | :heavy_plus_sign: once we add them |
| UrlRef                | UrlRef annotation expression                                    | :x:        |
