for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best num");
    }
    // console.log(element);
    // console.log(`outer loop values : ${i}`);
    
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop values : ${i} and ${j}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}


let myArr = ["fat", "thin", "tall", "short"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}
// careful not to exceed bounds of array : gives undefined which can cause problems


// break : exit the loop block
// continue : skips rest of block, resumes to next iteration
let n = 5
// for(let i = 0; i<n; i++){
//     if(i==3){
//         break
//     }
//     console.log(i);
// }


for(let i = 0; i<n; i++){
    if(i==2){
        continue
    }
    console.log(i);
}
