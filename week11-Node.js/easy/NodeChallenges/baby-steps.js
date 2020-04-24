//Challenge 2: Create a file named baby-steps.js.  
   
// Write a program that accepts one or more numbers as command-line arguments  
// and prints the sum of those numbers to the console (stdout).  

//HINT
// You can access command-line arguments via the global process object. The  
//   process object has an argv property which is an array containing the  
//   complete command-line. i.e. process.argv.  
   
//   To get started, write a program that simply contains:  
   
//      console.log(process.argv)  
//**can also use number() instead of '+'/

for (i = 2, sum = 0; i < process.argv.length; i++) {
    sum += +process.argv[i];
    };
    console.log(sum);