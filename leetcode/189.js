/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverse = (arr, start, end) => {    
    let currStart = start;
    let currEnd = end;
    while (currStart <= currEnd) {
        [arr[currStart], arr[currEnd]] = [arr[currEnd], arr[currStart]];
        currEnd--;
        currStart++;
    }
    return arr;
}
var rotate = function(nums, k) {
    const rotations = k % nums.length;
    if (!nums || !nums.length || rotations === 0) return nums;
    nums = reverse(nums, 0, nums.length - 1);
    nums = reverse(nums, 0, rotations - 1);
    nums = reverse(nums, rotations, nums.length - 1);

    return nums;
};

console.log(rotate([1,2,3,4,5,6], 2))

console.log(rotate([1,2], 3))