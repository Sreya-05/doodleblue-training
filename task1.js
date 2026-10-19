const students=["Priya","Arun","Divya","Rahul","Sneha"];


//first and last student names
first=students[0];
last=students[4];
console.log("first-"+first);
console.log("last-"+last);

//add karthick to the end of the array
add=students.push("karthick");
console.log(students);

//remove last student name
remove=students.pop();
console.log(students);

//slice: array containing arun, divya, rahul
slice=students.slice(1,4);
console.log(slice);

//splice: remove divya from the array
splice=students.splice(2,1);
console.log(splice);

//check whether priya exists in the array
check=students.includes("Priya");
console.log(check);