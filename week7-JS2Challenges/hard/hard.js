var tomHeight = 9; 
var tomMass = 8; //lbs

var jerryHeight = 10 * 2.54;  //convert cen. to in. 
var jerryMass = 0.099208; //45gram = 0.099208lbs

function bmi ( mass,height ) {
    return mass / (height * height)
}

var tomBmi = bmi(tomHeight, tomMass)
var jerryBmi = bmi(jerryHeight, jerryMass)
console.log("Tom's bmi is " + tomBmi)
console.log("Jerry's bmi is " + jerryBmi)


tomBmi = false;
jerryBmi =true;

var answer = Boolean(tomBmi > jerryBmi) 

console.log('Is Tom’s BMI higher than Jerry’s?' + ' ' + answer + '.')














