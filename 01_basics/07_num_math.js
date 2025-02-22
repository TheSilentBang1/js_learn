const id = 29992 //auto defined as number

//explicitly defining, using Number object, here number is stored as an object reference
const balance = new Number(2900)
// console.log(id);
// console.log(balance);
// console.log(typeof(id));
// console.log(id.toString().length);
// console.log(id.toFixed(2));
const num = 293.1991;
// console.log(typeof(num.toPrecision(2)));
const num2 = 29929292
// console.log(num2.toLocaleString('en-IN'));
//can check out max value, min value, max safe int, min safe int of Number

//maths : using Math object (inbuilt)

// console.log(Math.abs(-39));
// console.log(Math.PI);
// console.log(Math.ceil(2.001));
// console.log(Math.pow(2,3));

//important method : Math.random() -> returns val between 0 and 1 by default

// console.log((Math.random()*10)+1);
// console.log((Math.random()*10)+1);

//to find random value between 10 and 20:
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1) + min));

 


