class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let freq = {}

        nums.forEach((num) => {
            freq[num] = (freq[num] || 0) +  1
        })

        for(const item in freq) {
            if(freq[item] > 1) return true
        }

        return false
    }
}
