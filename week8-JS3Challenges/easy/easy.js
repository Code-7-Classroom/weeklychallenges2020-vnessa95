var run = exercise('Running!');
var swim = exercise('Swimming!');





function exercise(e) {
    return function () {
      return "Today's exercise: " + e
    };
  };
 
 
 console.log(run());
 console.log(swim());