class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = {};
        for (const str of strs) {
            const sorted = str.split("").sort().join("");
            if (!hashMap[sorted]) hashMap[sorted] = [];
            hashMap[sorted].push(str);
        }
        return Object.values(hashMap);
    }
}
