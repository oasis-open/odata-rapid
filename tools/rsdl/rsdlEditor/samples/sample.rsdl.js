const rsdlSample = `
type Company {
    key id: String
    name: String
}

type User {
    key id: String
    name: String
    addresses: [Address]
}

enum WorkLocation {
    Office
    Home
}

type Address {
    email: String
    physical: String
}

type Employee extends User {
    employeeNumber: String
    location: WorkLocation
    company: Company
    action relocate(location: WorkLocation): Employee
}

service {
    users: [User]
    companies: [Company]
    employees: [Employee]
}

`.trimStart();

export { rsdlSample };