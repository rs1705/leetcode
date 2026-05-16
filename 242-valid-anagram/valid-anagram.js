/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
//         const ss=s.split("").sort().join("")
//         const st=t.split("").sort().join("")
//         return ss===st?true:false;
    if(s.length!==t.length){
        return false;
    }
    const frequencyMapS= new Map();
    const frequencyMapT= new Map();
    
    for(let i=0;i< s.length; i++){
        if(frequencyMapS.has(s[i])){
            let frequency=frequencyMapS.get(s[i])
            frequencyMapS.set(s[i],frequency+1)
        }else{
        frequencyMapS.set(s[i],1)      
            
        }
        
        if(frequencyMapT.has(t[i])){
            let frequency=frequencyMapT.get(t[i])
            frequencyMapT.set(t[i],frequency+1)
        }else{
        frequencyMapT.set(t[i],1)      
        }
    }

  for(const [key,value] of frequencyMapS){
    if(value!==frequencyMapT.get(key)){
        return false;
    }
  }
  return true;


 };