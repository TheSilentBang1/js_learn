const cricketers = ["sachin", "rohit", "ravi"]
const footballers = ["beckham", "quaresma", "mendiddy"]

// cricketers.push(footballers)
// console.log(cricketers);

//problem when merging two arrays using push : treats the array passed as arg to push as a single element of the array
//if we were to access mendiddy : cricketers[3][2] which is not the way, what if we had to merge multiple arrays
// console.log(cricketers[3][2]);

// to achieve this merging of arrays : can use .concat method 
// const sportsPersons = cricketers.concat(footballers)
// console.log(sportsPersons);

//best way to do so : using spread operator : spreads elements when concatenating like glass on floor
//its very easy to use, can add multiple arrays at same time, spread operator creates shallow copy,ie, reference is shared to the original
const sportsPersons = [...cricketers, ...footballers]
sportsPersons[0] = "chokli"
// console.log(sportsPersons);
// console.log(cricketers);
//cricketers not changed even if spread creates shallow copy, ie, passes reference to original because original contains primitive values which are passed by value not by reference here by the spread operator as we studied in types of datatypes : non referenced/primitive like strings, boolean, numbers, etc. and referenced datatypes like objects
// ... / spread operator is commonly used to concatenate arrays 

//how do we refine an array if we have arrays inside array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//how do we level this out? --> using flat method along with degree by which we need to flatten it : here should be 2 as we have an array inside array inside an array
// const newArr = another_array.flat(Infinity)
// console.log(newArr);

// constructing arrays from passed values 
console.log(Array.from("arpit")); //creates an array with its elements as each character of the given string, very useful method : can be used to fetch user data in js and manipulate it
console.log(Array.from({name : "arpit"})); //prints empty array as we didnt specify if we want the array from the key or the values of the object

let n1 = 100
let n2 = 200

console.log(Array.of(n1,n2)); //for creating array using multiple values/variables, from only works with single variable/value and makes an array out of that