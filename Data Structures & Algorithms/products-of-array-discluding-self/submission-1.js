class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length)

        for(const [i, num] of nums.entries()) {
            let prod = 1 

            for(const [j, num] of nums.entries()) {
                if(i !== j) prod *= num
            }

            res[i] = prod
        }

        return res
    }
}
