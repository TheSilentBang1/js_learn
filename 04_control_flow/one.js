// if statement
// const isLoggedIn = true
// const temperature = 41
// if(temperature === 41){
//     console.log("temp is 41");
// }
// else{
//     console.log("temp is not 41");
// }


// comparision operators : <, >, <=, >=, ==, !=, ===, !== 

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }
// console.log(`user power : ${power}`); // power is defined in if block scope, can't be accessed outside of it (we used const, same result if we use let but var : allows it to be used outside of block -> not good, overwrite values/low security : var not used)

// const balance = 1000

// if(balance > 500) console.log("exec"); //implicit scope : in the same line, {} not used

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// } // else is optional in if else if block 

//practical example of conditionals
const userLoggedIn = true
const debitCard = true
const loggedInUsingGmail = false
const loggedInUsingGoogle = true

if (userLoggedIn && debitCard) {
    console.log("allowed to buy item");
}
if(loggedInUsingGmail || loggedInUsingGoogle){
    console.log("logged in");
}