// this keyword, arrow function

// this : refers to current context 

const user = {
    username : "arpit",
    price : 100,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to our website`);
        //this refers to current context here, ie, the user object
        console.log(this);
        
    }
}
// user.welcomeMessage()

// user.username = "ram"
// user.welcomeMessage() //prints ram, as we didnt hard code the username like : user.username in the bracket, we used this which means current context, we changed the context -> changed the username to ramu, therefore it was reflected when we called welcomeMessage

// context : the situation in which something happens, the way things are around whats happening 

// printing this : prints the current context : the current object with its properties, etc.

// console.log(this); // prints {}, empty object in node env

// node environment vs browser environment (window object)

// imp. : when we are in node environment, this, which refers to current context refers to an empty object --> diff than when we are in browser environment

// when we print this in browser : prints window object --> global object in browser (before node, deno, etc. runtime envs of js existed : js could only run on browser : it has a global object with all methods, etc : window object) --> this window object contains methods we can use like onclick, etc.

function coffee(){
    let username = "arpit"
    console.log(this.username); //undefined, this for referring to the current context only works for objects only
}
// coffee()
// printing this inside function : gives a lot of values, in node env

// const sutta = function(){
//     let username = "arpit"
//     console.log(this.username);
// }
// sutta() //same result, this gives undefined

// another way of declaring function : arrow function

const chakna = () => {
    let username = "arpit"
    // console.log(this.username); still undefined
    console.log(this); // empty object
}

// chakna()

// saying that the diff b/w arrow function and regular function is that this doesnt work with arrow function might not be correct, this prints empty object in arrow func

// more about arrow functions 

//basic syntax : () => {}

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }

// implicit return : no need to write return, same line
// const addTwo = (num1,num2) => num1+num2
// {} used -> need to write return, () -> no need to write return statement 
const addTwo = (num1,num2) => (num1+num2)

// console.log(addTwo(2,3));

// explicit return : return used 

// returning objects in implicit function

const xyz = (num1,num2) => ({username : "arpit"})
// console.log(xyz(2,3));
// to return an object : have to use (), {} wont return object on its own in implicit function

const myArr = [1,2,3]

myArr.forEach() // we can use function to operate over each element of the array in different ways : basic function, implicit declaration, arrow function, etc.