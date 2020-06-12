## Rapid Profile CLI


## Requirements: 

- Node.js 10 or newer

### Usage

Install cli

```bash
npm install -g rapidpro-cli
```

Transform your RSDL file to JSON
```bash
rapidpro transform yourfile.graphql
```

Validate your RSDL file
```bash
rapidpro validate yourfile.graphql
```

### Example RSDL file

```graphql
type Person {
    UserName: String! @RapidID
    FirstName: String
    LastName: String!
    Value: Float!
    ValueInt: Int!
    Condition: Boolean!
    StartDate: Date
}
```

