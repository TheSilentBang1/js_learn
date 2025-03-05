// ways to declare objects : literals, constructor
// when we declare object using literals : not singleton, when using constructor : singleton (one of its kind)
// Object.create --> constructor, singleton 

const my_sym = Symbol("key1")

// object literal
const js_user = {
    name : "arpit", //name key is stored as "name" bts
    age : 19,
    [my_sym] : "mykey1",
    "full_name" : "arpit sharma", //impossible to access full_name key using . operator, using [] works here
    isLoggedIn : false,
    lastLoggedIn : ["monday", "tuesday"]
}
//ways to access values of an object : using ., using []
// console.log(js_user.isLoggedIn);
// console.log(js_user["age"]);
// console.log(js_user["full_name"]);
//how to define symbol inside an object : imp question
//using [] while def key
// console.log(js_user[my_sym]); 
// console.log(typeof my_sym); 

js_user.age = 23
// console.log(js_user.age);
// Object.freeze(js_user)
js_user.age = 32
// console.log(js_user.age);
// console.log(js_user);

js_user.greeting = function(){
    console.log("hello");
}
js_user.greeting2 = function(){
    console.log(`hello, ${this.full_name}`);//this to reference the same object    
}
// console.log(js_user.greeting); 
// js_user.greeting()
js_user.greeting2()
console.log(js_user.greeting()); //gives hello + undefined too --> more about this undefined later