/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newArray = [...new Set(nums)];
    return nums.length !== newArray.length;
};