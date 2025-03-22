// truthy : the value that we assume to be true, eg. if userEmail, which is a string is non empty : it evaluates to true. These are pre defined in js.
// falsy : values assumed to be false, eg. empty string, ie, ""

const userEmail = "hello@ai.com"

// if (userEmail) {
//     console.log("got user email");
// }
// else{
//     console.log("dont have user email");
// }

// falsy values : false, 0, -0, BigInt : 0n, "", null, undefined, NaN 
// truthy values : [], "0", 'false', " ", {}, function(){} 

//correct way to check if something entered by user is empty or not

if(userEmail.length === 0){
    console.log("array empty");   
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

// && || are logical operators

// Nullish coalescing operator : ??: focus on null, undefined
// The ?? operator in JavaScript is called the nullish coalescing operator. It is used to return the right-hand operand when the left-hand operand is null or undefined. If the left-hand operand has any other value (including 0, false, or ""), it returns the left-hand operand.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 // 10 gets assigned
// val1 = undefined ?? 15 

val1 = null ?? 10 ?? 20 //assigns first found value

// console.log(val1);

// ternary operator : shorthand for if else

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");