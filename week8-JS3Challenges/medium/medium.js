//The toFixed() method converts a number into a string, keeping a specified number of decimals.

var sharePizza = cutPizza(8);

function cutPizza(slices){

    return function(people){
        var pizza= slices/people;
        return "each person gets "+ pizza.toFixed(2) + " slices of pizza."
    }
 
}
	console.log(sharePizza(2));                                                                                                                                                                    
	console.log(sharePizza(3)); 
	
