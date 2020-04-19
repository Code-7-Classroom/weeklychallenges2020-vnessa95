//VAR establishes a variable, VAR is globally scoped meaning it can be used outside of a function block{}, VAR can also be redeclared

var name;//declaration
name = "Vee" // initialization
console.log("Good morning, my name is " + name);


//LET is block scoped it can not be used outide of a block. LET can be updated updated with-in its scope but not reclared, unlike VAR
let hobby;
hobby  = "stitching";
console.log(`I have taken up a new hobby, ${hobby}. It is fun and relaxing.`);


//CONST is block scoped. it can only be accessed within declared block. CONST can not be updated or redeclared.
const career= "front end developer"; //declaration plus initialization in one step
console.log("I am currently a coding inter and hoping to develop my skills as a " + career)


// var declarations are globally scoped or function scoped while let and const are block scoped.

// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.

// They are all hoisted to the top of their scope but while varvariables are initialized with undefined, let and const variables are not initialized.

// While var and let can be declared without being initialized, const must be initialized during declaration.