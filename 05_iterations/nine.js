// reduce method
// works with accumulator, initialValue, currentValue

const myNums = [1,2,3,4,5]

const myTotal = myNums.reduce(function(accumulator, currentValue){
    // console.log(`accumulator value : ${accumulator}, current value : ${currentValue}`);
    
    return accumulator = accumulator + currentValue
},0)
// 0 passed as initialValue to accumulator, its passed only once to the accumulator variable in the first step

// console.log(myTotal); //15


// same work using arrow function

const myTotal2 = myNums.reduce( (acc, curr) => acc+curr,0 )

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price : 2000
    },
    {
        itemName : "java course",
        price : 3000
    },
    {
        itemName : "python course",
        price : 4000
    },
]

// add all items and give price of all items

const totalPrice = shoppingCart.reduce( (acc, item) => item.price + acc , 0)

console.log(totalPrice);
