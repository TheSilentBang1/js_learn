//functions, parameters
//function : reusable piece of code that performs a specific task

function sayName(){
    console.log("Arpit");
}
// console.log(sayName);
sayName
// sayName()

// function addTwoNums(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result; // or
    return num1 + num2;
}

// if we dont pass anything to this fn : NaN
// addTwoNums(3,5) 
// addTwoNums(3, "5")
// addTwoNums(3, "a")
// addTwoNums(3, null)
// we should do checking if the datatype is same in the addTwoNums function

// parameters vs arguments 

// parameters : the variables in the function definition
// arguments : the actual values passed to the function in function call

// can store a function's returned value inside a variable
// const res = addTwoNums(5, 4)
// console.log("Result : ", res); // res = undefined??? 

// res gave undefined as : understand the difference between value returned by a function, value printed using console.log
// addTwoNumbers(1, 2) // doesnt print anything as we returned some value from the function not print it

const result = addTwoNumbers(2,4)
// console.log("result : ", result); //gives 6

function logInUserMessage(username = "arpit"){ // default defined
    if(!username){ // empty string : false, we want true to execute if block
        console.log("enter username!!");
        return;
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage("arpit"));
// console.log(logInUserMessage()); 

//undefined just logged in : when no argument given to function : undefined

// console.log(logInUserMessage()); 
// when no default value is defined and it executed if block : output is : enter name and also undefined, why undefined in that case : "Since the function exited without a return value, the default return value is undefined."

// parameters when number of arguments to be passed is unknown : eg. user adding items to cart n times in ecommerce app

function calcCartPrice(...num1){
    return num1
}
// console.log(calcCartPrice(2));

// what if there were multiple arguments, multiple items were to be added to the cart : only accepts 1st argument, therefore to pass n arguments to a function : we use rest operator in parameter of function : ...

// ... : depending on its use, its called rest or spread operator 

// here, rest operator packs the arguments to a bundle as array

// console.log(calcCartPrice(200,300,400));

// passing object in functions
const user = {
    username : "Arpit",
    price : 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
   
}
// handleObject(user)

//if we change lets say name of a property in object : say price to prices, it will obv give an error as anyobject.price doesnt exist and is therefore not extracted from the object and printed, therefore type checking is important in the function : using if and else : check if the passed argument is an object, check if property exists, etc. this is done automatically in typescript, but in js it is usually done manually 

//can pass object directly too
// handleObject({
//     username : "sarwan",
//     price : 201
// })

// passing arrays to function

const myNewArr = [200, 203, 2003, 9392]

function returnSec(arr){
    return arr[1]
}
console.log(returnSec(myNewArr));