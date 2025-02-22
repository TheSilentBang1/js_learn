//string concatenation in js
const name = "arpit"
const age = 12

// not a good way of concatenation:
// console.log(name + age + " arpit@gmail.com");
// better/more secure,readable way : `hello` (backticks), string interpolation, can add placeholders for injecting variable
// console.log(`hello, my name is ${name} and my age is ${age}`);

//another way of declaring string : new keyword
const myName = new String('arpit')
// console.log(myName);
// console.log(myName.length);
// console.log(myName.charAt(3));
// -ve indexing goes from rightmost to left in slice
// const anotherString = myName.slice(-3,4)
// console.log(anotherString);
// console.log(myName.trim());
// https://chatgpt.com/c/677ff220-25f4-8003-a0a0-c7e720c07d35 imp string prototype methods