// iife : immediately invoked function expressions : get immediately invoked when a script it loaded
//syntax : wrap the function inside (), second () to call the function
// 1 : 53 am 
/*
reasons to use iife : 
-> for database connection as soon as app loads
-> prevent global pollution inside a function : major reason
*/

//named iife
(function db(){
    console.log('db connected');
})();
// db()
// wrapping rounded brackets to wrap function : first () -> to write function definition, second () -> to call the function

// major reason to use iife : to prevent global pollution, unwanted inheritance of values inside the function

//using arrow function for iife :
//unnamed iife : using arrow function 
( (name) => {
    console.log(`db connected two ${name}`);
} )('arpit');

// iife functions need to be stopped, using ; after the function call, this is how you write multiple iife and make them work, just like a function, can pass arguments to them in the function call inside ().