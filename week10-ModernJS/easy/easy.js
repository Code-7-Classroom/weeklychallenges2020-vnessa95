function highestNum(arr){
    console.log(arr);
    var result = Math.max(...arr);
    console.log("The highest number is "+ result);
}

highestNum([1, 2, 3]);
highestNum([3, 6, 4, 5, 2, 1]);
highestNum([3, 3, 3]);




// const nums = [1, 2, 3]
// Math.min(...nums)    // 1
// Math.max(...nums)    // 3

// ... in front of an array will convert array to distinct variables and send them to the function, which is equivalent to Math.min(1, 2, 3)
// Math.max(1, 2, 3)


  

