class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashMap = {}

        for(let i = 0;  i < nums.length; i++) {
            const needed = target - nums[i]

            if(hashMap[needed] !== undefined) return [ hashMap[needed], i]

            hashMap[nums[i]] = i 
        }

    }
}
