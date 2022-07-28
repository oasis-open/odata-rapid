const rsdlSample = `
type Company
{
    key stockSymbol: String
    name: String
    incorporated: DateTime
    employees: [Employee]
}

type Employee
{
    key id: Integer 
    firstName : String?
    lastName : String?
    title: String?
}

service
{
    competitors: [Company]
    company: Company
}
`.trimStart();

export { rsdlSample };
