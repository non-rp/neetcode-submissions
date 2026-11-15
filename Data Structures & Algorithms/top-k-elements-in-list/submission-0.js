class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()

        for(const num of nums) {
            if(!map.has(num)) map.set(num, 0)
            map.set(num, map.get(num)+1)
        }

        return [...map].sort((a,b) => b[1] - a[1])
            .slice(0, k)
            .map(([key])=> key)
    }
}
