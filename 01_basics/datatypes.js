let isNumber=56
let isString="ali"
let isBool=true
let isDefine=undefined
// here we can see the datatypes of above intialize variables
//console.table([typeof isNumber,typeof isString,typeof isBool,typeof isDefine])
//if we put the typeof keyword just before square brackets and after the round brackets than it 
// treats the inner variables as a object so it gave us the object datatype like
//console.table(typeof[ isNumber, isString, isBool, isDefine])

// if we change the datatype of string to a number than it will be:
let string=String(isNumber)
console.log(typeof string);
//if we want to add the string to a number in javascript it didnt throw an error like
//means in javascript it check the datatype of first variable and treat the whole variables
//likewise
console.log(10+isNumber+string+2)

//********************************arthimetic operations*****************************************

//addition(+)
//subracrion(-)
//division(/)
//multiplication(*)
//power(**)


