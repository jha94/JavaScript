var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    let count = 0;
    for(let index=0;index<nums.length;index++){
        for(let ind=0;ind<nums.length;ind++){
            if(nums[index]>nums[ind]){
                count++;
            }
            
        }
        result[index] = count;
            count = 0;
    }
console.log(result)
    
};
smallerNumbersThanCurrent([8,1,2,2,3]);