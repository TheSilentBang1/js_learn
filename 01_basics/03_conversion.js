"use strict"
let val = 21
let val2 = "21"
let val3 = "21abc"
let val4 = null
let val5 = undefined
// console.log(typeof(val));
// console.log(typeof(val2));

/*
to convert val2 which is a string, into a number as we want to work with the number inside this string : Number is used, every datatype has such class, just the first letter is capital, eg. Boolean. It's class based something, more about this later
*/
let val2AsNumber = Number(val2)
// console.log(typeof(val2AsNumber));
let val3AsNumber = Number(val3)
// console.log(typeof(val3AsNumber));
// console.log(val3AsNumber); //NaN, not a number
//NaN is a special type, which can be caught
//numbers are unreliable in js -> typescript preferred 

let val4AsNumber = Number(val4)
// console.log(typeof(val4AsNumber)); 
// console.log(val4AsNumber); //null -> 0
let val5AsNumber = Number(val5)
// console.log(typeof(val5AsNumber));
// console.log(val5AsNumber); //undefine -> NaN
/*
similarly if we convert "xyz" to number using Number : NaN
boolean: if true --> 1, if false --> 0

summary: conversion into number 
"33" -> 33
"arpit" -> NaN
true -> 1, false -> 0 
*/ 

let isLoggedIn = ""
let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);
// console.log(typeof(booleanisLoggedIn));

/*
conversion to boolean 
1 --> true
0 -->false
"arpit" --> true
"" --> false 
*/

let someNum = 33
let stringNum = String(someNum)
console.log(stringNum); //33
console.log(typeof(stringNum)); //string

