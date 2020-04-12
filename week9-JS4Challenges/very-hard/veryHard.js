var coins = [1, 2, 5];
var amt = 11;






function Combo(coins, amt) {
    coins.sort((a, b) => a - b).reverse();
    var count = 0;
    for (var i = 0; i < coins.length; i++) {
        while (amt >= coins[i]) {
            amt -= coins[i];
            count++;
        }
    }
    if (amt !== 0) {
        return -1;
    }


    return count;
}

console.log(Combo(coins, amt));

    


