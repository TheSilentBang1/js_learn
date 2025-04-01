const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map method
// map returns values automatically unlike forEach

const newNums = myNumbers.map( (num) =>{
    return num+10;
})

// console.log(newNums);


// chaining : using multiple methods at a time

const newNums2 = myNumbers 
                 .map((nums) => nums*10)
                 .map((nums) =>nums-1)
                 .filter((nums) => 20 < nums)

console.log(newNums2);


// the values of nums in the second chain/map : result of the previous chain : for second : 10, 20, and so on
