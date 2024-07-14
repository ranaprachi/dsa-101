var threeSum = function(nums) {
    if (!nums || nums.length < 3) return [];
    if (nums.length === 3) {
        if (nums[0] + nums[1] + nums[2] === 0) return [nums];
    }
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        let remArr = [...nums];
        remArr.splice(i, 1);
        let targetSum = - nums[i];
        let sumMap = new Map();
        console.log('remArr :', remArr, targetSum);
        for (let j = 0; j < remArr.length; j++ ) {
            const reqNum = targetSum - remArr[j];
            console.log('num : ', remArr[j], ' reqNum :', reqNum)
            if (sumMap.has(reqNum)) {
                const num = sumMap.get(reqNum);
                console.log('------- conditions met >>>>', nums[i], remArr[j], num);

                result.push([nums[i], remArr[j], num]);
            }
            sumMap.set(reqNum, remArr[j]);
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));