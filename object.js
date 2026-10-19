const employee= {
    name: "Arun",
    salary: 30000
};

//retrieve name and salary
console.log(employee.name);
console.log(employee["salary"]);

//update
employee.salary=35000;
console.log(employee.salary);

//add
employee.city= "Chennai";
console.log(employee);


//delete
delete employee.city;
console.log(employee);