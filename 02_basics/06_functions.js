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