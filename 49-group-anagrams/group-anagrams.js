/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    //SORTING THE ELEMENTS OF ARRAY AND STORING INTO HASHMAP APPROACH
    // let map= new Map()
    // for(let s of strs){
    //     let key= s.split("").sort().join("")
    //     if(!map.get(key)){
    //         map.set(key,[])
    //     }
    //     map.get(key).push(s)
    // }
    //    return [...map.values()]

    //MAKING CHARACTER FREQUENCY ARRAY AS KEY AND STORING THE ACTUAL ELEMENTS AS THEIR VALUE IN THE FREQUENCY MAP

    let map = new Map();
    let count = new Array(26);
    for (let s of strs) {
        count.fill(0)
        for(ch of s){
            const index= ch.charCodeAt(0)-"a".charCodeAt(0)
            count[index]++
        }
        const key= count.join("#")
        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(s)
    }
    return [...map.values()]
};
