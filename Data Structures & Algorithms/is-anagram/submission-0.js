class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map()

        for(const sm of s) {
            if(!map.has(sm)) {
                map.set(sm, 1)
            } else {
                map.set(sm, map.get(sm)+1)
            }
        }

        for(const st of t) {
            if(!map.has(st)) return false

            if(map.get(st) > 1) {
                map.set(st, map.get(st)-1)
            } else {
                map.delete(st)
            }
        }

        return true
    }
}
