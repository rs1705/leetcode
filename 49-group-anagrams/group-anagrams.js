/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //SORTING THE ELEMENTS OF ARRAY AND STORING INTO HASHMAP APPROACH
    let map= new Map()
    for(let s of strs){
        let key= s.split("").sort().join("")
        if(!map.get(key)){
            map.set(key,[])
        }
        map.get(key).push(s)
    }
       return [...map.values()]
};