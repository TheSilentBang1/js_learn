//dates, Date object
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

let myDate2 = new Date(2023, 0, 12) //months start w/ 0
// console.log(myDate2.toDateString());
let myDate3 = new Date("01-12-2021")
// console.log(myDate3.toLocaleString());
let myTimeStamp = Date.now() //gives timestamp in ms from 1 jan 1970, used in quizzes, etc.
// console.log(myTimeStamp);
// console.log(myDate3.getTime()); //converts to ms, now can compare to the timestamp, etc.
//converting current time in ms using Date.now() to seconds : 
// console.log(Math.floor(Date.now()/1000)); //gives time in s
let newDate = new Date();
// console.log(newDate.getMonth() + 1); 
// console.log(newDate.getDay());

// important method : toLocalString()
// customize the format of date, time
newDate.toLocaleString('default', {
    weekday: "long",
})



