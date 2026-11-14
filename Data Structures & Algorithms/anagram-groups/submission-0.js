class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {}

        for(const str of strs) {
            const sorted = str.split('').sort().join('')

            if(hashMap[sorted] === undefined) {
                hashMap[sorted] = [str]
            } else {
                hashMap[sorted].push(str)
            }
        }

        return Object.values(hashMap)
    }
}
