https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html#sec_Applicability

| Symbolic Value        | Model Element                                                   | Status             | Comment                                 |
| --------------------- | --------------------------------------------------------------- | ------------------ | --------------------------------------- |
| Action                | Action                                                          | :heavy_check_mark: |                                         |
| ActionImport          | Action Import                                                   | :x:                | no direct representation of import      |
| Annotation            | Annotation                                                      | :x:                |                                         |
| Apply                 | Application of a client-side function in an annotation          | :x:                |                                         |
| Cast                  | Type Cast annotation expression                                 | :x:                |                                         |
| Collection            | Entity Set or collection-valued Property or Navigation Property | :x:                |                                         |
| ComplexType           | Complex Type                                                    | :heavy_check_mark: |                                         |
| EntityContainer       | Entity Container                                                | :heavy_check_mark: |                                         |
| EntitySet             | Entity Set                                                      | :heavy_check_mark: |                                         |
| EntityType            | Entity Type                                                     | :heavy_check_mark: |                                         |
| EnumType              | Enumeration Type                                                | :heavy_check_mark: |                                         |
| Function              | Function                                                        | :heavy_check_mark: |                                         |
| FunctionImport        | Function Import                                                 | :x:                | no direct representation of import      |
| If                    | Conditional annotation expression                               | :x:                |                                         |
| Include               | Reference to an Included Schema                                 | :heavy_check_mark  | default namespace                       |
| IsOf                  | Type Check annotation expression                                | :x:                |                                         |
| LabeledElement        | Labeled Element expression                                      | :x:                |                                         |
| Member                | Enumeration Member                                              | :heavy_check_mark: |                                         |
| NavigationProperty    | Navigation Property                                             | :heavy_check_mark: |                                         |
| Null                  | Null annotation expression                                      | :x:                |                                         |
| OnDelete              | On-Delete Action of a navigation property                       | :x:                |                                         |
| Parameter             | Action of Function Parameter                                    | :heavy_check_mark: |                                         |
| Property              | Property of a structured type                                   | :heavy_check_mark: |                                         |
| PropertyValue         | Property value of a Record annotation expression                | :x:                |                                         |
| Record                | Record annotation expression                                    | :heavy_plus_sign:  | annotations within annotations are cool |
| Reference             | Reference to another CSDL document                              | :x:                |                                         |
| ReferentialConstraint | Referential Constraint of a navigation property                 | :x:                |                                         |
| ReturnType            | Return Type of an Action or Function                            | :heavy_check_mark: |                                         |
| Schema                | Schema                                                          | :heavy_plus_sign:  | schema version, default namespace       |
| Singleton             | Singleton                                                       | :heavy_check_mark: |                                         |
| Term                  | Term                                                            | :x:,               | not in RSDL                             |
| TypeDefinition        | Type Definition                                                 | :x:                | once we add type definitions it will required |
| UrlRef                | UrlRef annotation expression                                    | :x:                |                                         |
