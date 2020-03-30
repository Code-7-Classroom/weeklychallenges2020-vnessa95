// array methods 
// concat -merges and trturn new array 
// toString -coverts to string and returns result
// forEach -calls function for each element in array 


  
var drinksArray = [];

console.log(drinksArray);

var foodsArray = [];

foodsArray[0] = 'apple';
foodsArray[1] = 'sandwich';
foodsArray[2] = 'chips';

console.log(foodsArray);

var mealsArray = drinksArray.concat(foodsArray);

console.log(mealsArray);

mealsArray.reverse();

console.log(mealsArray);