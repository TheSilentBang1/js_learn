const rollNo = 1929192
// rollNo = 91919
// console.log(rollNo); //cannot reassign/change const variables
let studentEmail = "arpit@gmail.com"
studentEmail = "arpit2003@gmail.com"
var studentAge = "10"
studentAge = "19"
studentGrade = "A+"
studentGrade = "B+"

let state;

console.table([rollNo,studentEmail,studentAge,studentGrade,state]);
/*
prefer not to use var because of issue in block and functional scope 
*/