// let a = 10
// const b = 20
// var c = 30
let a = 200

// {} -> scope, block scope 

if(true){
    let a = 10
    const b = 20
    // c = 30
    // console.log(a); //10 
    
}

// console.log(a); //a not defined : good 
// console.log(b); //b not defined : good 
// console.log(c); // prints 30, which it shouldnt as c is defined inside the block : should only be accessible in that block : problem with var, also var can be redeclared, which can cause a problem

// therefore it is discouraged to use var

// console.log(a); // a remains 200 outside the if, where it is 10 as it is declared using let -> block level scope : good

//scope in nodejs vs window scope of browser -> when we run code in node, it has different global scope as compared to when js runs in browser : it has window scope; more about this later

//nested scope
function one(){
    const username = "arpit"

    function two(){
        const website = "leetcode"
        console.log(username); // works fine, can access from outer function one
    }
    // console.log(website); //error, not defined, website can be accesses inside its scope, ie, inside two()
    two()
}
// one()

//different  call stack is made when one, two function is called

//child can access parent's properties, parent can't access child's properties

if(true){
    const username = "arpit"
    if(true){
        const website = " linkedin"
        // console.log(username + website);
    }
    // console.log(website); //throws error, website if local to the nested if block
    // console.log(username);
}

// intresting function declaration 


// console.log(addOne(5)); //no error even if function called before its declared, prints 6. (using a function/ calling a function before declaration)

function addOne(num){
    return num+1;
}
// addOne(5) // function returned 5+1 = 6, but didnt print it as we know

// assigning function to variable : another technique of functions/"expressions", variables are very powerful in js, can hold any value like function, json, etc.

// addTwo(5) // throws error??? --> functions assigned to variables are not hoisted but normal functions are 

// more about hoisting, execution context later 

const addTwo = function(num){
    return num+2;
}

addTwo(5)