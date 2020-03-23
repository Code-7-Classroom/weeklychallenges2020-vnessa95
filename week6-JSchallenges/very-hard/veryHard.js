//variables
var a = prompt('Enter a number.'); 
var operator = prompt('Enter an operator (+, -, / or *).'); 
var b = prompt('Enter another number.'); 
var ans;

//functions

function add(a,b) {
    ans = parseFloat(a) + parseFloat(b);
    console.log("The Answer is " + a + operator + b + "=" + ans);
}
function subtract(a,b) {
    ans = parseFloat(a) - parseFloat(b);
    console.log("The Answer is " + a + operator + b + "=" + ans);
}
function multiply(a,b) {
    ans = parseFloat(a) * parseFloat(b);
    console.log("The Answer is " + a + operator + b + "=" + ans);
}
function divide(a,b) {
    ans = parseFloat(a) / parseFloat(b);
    console.log("The Answer is " + a + operator + b + "=" + ans);
};




if (operator === '+'){
    add(a,b);
}

else if(operator === '-'){
   subtract(a,b);
}

else if(operator === '*'){
    multiply(a,b);
 }

 else if (operator === '/')
 {
    divide(a,b);
 };