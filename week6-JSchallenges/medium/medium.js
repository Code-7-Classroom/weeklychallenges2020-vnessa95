var colorOne = 'yellow';
var colorTwo = 'orange';
var favColor = prompt('Is my favorite color Yellow or Orange?')
console.log(prompt)
//right answer
var string = 'yes!! i love yellow';
string = string.toUpperCase();
//wrong answer
var stringTwo = 'youre, wrong. but, I wont tell anyone.';
stringTwo = stringTwo.toLowerCase();



if (favColor == colorOne) {
    console.log(string);
}

else {
   console.log(stringTwo);
}

