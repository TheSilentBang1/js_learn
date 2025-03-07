//object destructuring, json api

//object destructuring : extracting properties from object and assigning them to variables

const course = {
    course_name : "js course",
    price: "100"
}

// how do we access values inside the object : using . operator : nothing wrong w/ it but it can be tedious in case of many values 
//course.course_name

const {course_name : cname} = course //destructuring the object into variable : if other name for variable not given object value is saved in the key of same name : eg. course_name here --> const {course_name} = course, but we can change the variable in which we want to store destructured object
console.log(cname);

//menu card ~ documentation of api, api deals in json data in the form of object, fetched api data can be in array form too

//json : defined as object with no name
//json : javascript object notation

// what an api looks like 
// {
//     name : "Arpit",
//     age : 10
// }