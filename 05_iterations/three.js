// high order array loops

// for of
// similar to range based for loop in cpp
// iterator can be applied to different datatypes like array, object

const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num);
}

const greetings = "hello world!"
for(const greet of greetings){
    // console.log(`each char is ${greet}`);
}

// maps
// map : object that holds key value pairs
// map follows order in which items are set/pushed into the object, maps store unique key value pairs
const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
// console.log(map);

// printing key value pairs using for of loop
for (const [key, value] of map) {
    // console.log(key,':-', value);
}

const myObj = {
    'game1' : 'nfs',
    'game2' : 'csgo'
}

// for (const [key, value] of myObj) {
//     console.log();
//     // console.log(key,':-', value); //object is not iterable like this
// }