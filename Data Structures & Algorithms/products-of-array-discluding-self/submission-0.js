class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length)

        for(const [num, i] of nums.entries()) {
            let prod = 1 

            for(const [num, j] of nums.entries()) {
                if(i !== j) prod *= num
            }

            res[i] = prod
        }

        return res
    }
}
