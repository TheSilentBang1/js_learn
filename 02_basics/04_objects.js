const tinderUser = new Object() //singleton, using constructor
//same as const tinderUser = {} but this one is not singleton 

tinderUser.id = "123sjs"
tinderUser.name = "samuel"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

//object nesting
const regularUser = {
    email : "xyz@gmail.com",
    fullname : {
        userfullname : {
            firstname : "arpit",
            lastname : "sharma"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

const obj3 = {...obj1, ...obj2} // spread operator : used mostly
// const obj3 = Object.assign({}, obj1,obj2) //{} is target
// console.log(obj3);

// when values come from database : array of object

const users = [
    {
        id : 1,
        email : "xyz@gmail.com"
    },
    {
        id : 1,
        email : "xyz@gmail.com"
    },
    {
        id : 1,
        email : "xyz@gmail.com"
    }
]
// console.log(tinderUser);
//fetching keys and values of an object as array
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check if property/key exists in our object
//to see all the object methods --> console --> object prototype