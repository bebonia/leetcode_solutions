var twoSum = function(nums, target) {
    var output = [];
    var found = false;
    
    for(i = 0;i < (nums.length); i++) {
        
        if(nums.indexOf(target-nums[i]) > -1) {
            
            found = true;
            output.push(i);
            output.push(nums.indexOf(target-nums[i]));
            break;
        }
    }
    
    if(found === true) {
      return output;      
    }
};