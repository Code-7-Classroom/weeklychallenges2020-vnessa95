function uniqueChar(str){
    console.log(str);
    
for (let i = 0; i < str.length ; i++){
    if(str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))){
            console.log(str.charAt(i));
            break;//needed to stop the code from repeating. the function was returning every unique character in order.
    }
}
}

uniqueChar("the quick brown fox jumps over the calm kitten quietly");
uniqueChar("this hat is the greatest!");
uniqueChar("what a wonderful day it has been!");

//charAt to return CHARACTER not entire sentence 

//The indexOf() method returns the position of the first occurrence of a specified value in a string.

//The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.

