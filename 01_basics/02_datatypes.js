"use strict" //treat code as per new js version
/*
alert(3+3) //we using nodejs, not browser engine, won't work
*/
//code readability is important

//refer mdn for js documentation : easy to understand
//original js documentation : tc39.es, official ecma site

/*
no need to specify datatypes in js while declaring variables usually, its auto identified 
primitive datatypes in js : 
number : range is around 2^53
bigint : for storing larger numbers
string : sequence of characters
boolean : either true or false value 
null : standalone value, representation of empty value, special datatype 
undefined : variable declared, but not assigned a value yet 
symbol : for uniqueness
non-primitive : object : user defined datatype, container for properties and methods, important part of js, oop

useful docs : mdn docs, tc39.es : official ecmascript docs
*/

/*
typeof to find datatype of variable
typeof null --> object : why?? issue in js 
typeof undefined --> undefined but null object??
*/ 