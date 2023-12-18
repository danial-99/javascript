//console.log(6+2)
//the constant means its value willl not be change throughout the program
//while on other hand let means we can change the value of that variable  as we want 
const studentid=211070
let studentname="aman ali shah"
let studentemail="ali@gmail.com"
let studentcity="gilgit"
// here due to some reason student have to shift to another city so thats in output we
// can see that the value in the variable has been change
studentcity="islamabad"
//we use the table instead of log because it will be a length and a long work
console.table([studentid,studentname,studentemail,studentcity])