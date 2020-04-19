function average(arr){
    console.log(arr);
   var result = arr.reduce((a, b) => (a + b)) / arr.length;
   console.log("The average number is "+ result);
}


average([1, 4, 7]);
average([10, 5]);
average([1.5, 3, 2.5, 1]);


// .reduce() is to calculate the average of an array.
// create arrow function to add the sum and divide by the length of the array for an average