// Write your solution in this file!
const employee = {
    name: `Bill`,
    streetAddress: `213 Happy Street`


}

function updateEmployeeWithKeyAndValue(employee, name, value) {
    return {
        ...employee,
        [name]: value
};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = { ...employee };
    delete newEmployee[name];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee;
}
