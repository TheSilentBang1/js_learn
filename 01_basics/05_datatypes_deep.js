/*
based on how data is stores in memory and how we can access that data stores in datatype/container in memory : datatypes are categorized into 2 main categories : non primitive/reference types and primitive datatypes

primitive dataypes : call by value (internal workings)
non primitive datatypes : call by reference (||)

primitive datatypes (7) : string, number, undefined, null, symbol(to make element unique), bigint, boolean

reference/non primitive datatypes : arrays, object, functions
to be good at js : browser events, objects

no need to define type of a variable when declaring it : dynamically typed language 

in typescript we need to define type : high safety

*/

let value; //undefined
// console.log(value);

//sample usage of symbol, for uniqueness
const id = Symbol('1234')
const secondId = Symbol('1234')
console.log(id);
console.log(secondId);
console.log(id === secondId); //although values same, they are both unique

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof secondId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
types of memory : 
stack : primitive variables are stores, pass by value
heap : non primitive varaibles are stores, pass by reference
*/
let obj1 = {
    name: "arpit",
    age: 29
}
// let obj2 = obj1 //pass by reference
let obj2 = {...obj1} //spread operator
// obj2.name = "kini" //changed name in obj1 too 
// to prevent this : use spread operator (...) :
