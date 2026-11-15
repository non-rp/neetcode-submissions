class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // hashMap + heap
        const map = new Map()

        for(const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1 )
        }

        const buckets = Array.from(
            {length: nums.length + 1},
            () => []
        )

        for(const [value, freq] of map) {
            buckets[freq].push(value)
        }

        const result = []

        for(let i = buckets.length - 1; i >= 1; i--) {

            for(const num of buckets[i]) {
                result.push(num)
                
                if(result.length === k) return result
            }            
        }
    }
}
