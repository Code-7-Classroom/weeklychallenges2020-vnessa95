var nums = [2, 4, 6, 8, 10, 12];

function arr(target){
  for (var i = 0; i < nums.length; i++){
    if(nums[i] == target){
        console.log("The current target, " + target + "'s position is: "+ nums.indexOf(target))
    }
  }
}

console.log(nums);
arr(2);
arr(8);
arr(12);