class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = new Map()

        for(const num of nums){
            if(!map.has(num)) {
                map.set(num)
            } else {
                return true
            }
        }

        return false
    }
}
