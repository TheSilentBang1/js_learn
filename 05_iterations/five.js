const coding = ['js', 'py', 'php', 'cpp']

// commonly used loop on array : for each loop, its defined in array prototype

// forEach expects a callback function

// coding.forEach( function (lang) {
//     console.log(lang);
    
// } )


// coding.forEach( (item) =>{
//     console.log(item);
// } )

function printMe(item){
    console.log(item);
}
// printMe function's reference given to forEach method as a callback function, printMe prints all items of the array
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

// [{}, {}, {}] -> this is a common scenario, objects inside array, no iterate over them : 

const myCoding = [
    {
        langName: "js",
        langType:"interpreted"
    },
    {
        langName: "c++",
        langType:"compiled"
    },
    {
        langName: "py",
        langType:"interpreted"
    }
]

myCoding.forEach((item) => {
    console.log(item.langName);
})
// here item : every object in the array, therefore to access properties of object : item.propName 