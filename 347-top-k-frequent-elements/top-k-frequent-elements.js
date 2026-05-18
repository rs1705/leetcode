/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const fMap= new Map()
    for(let n of nums){
        if(!fMap.has(n)){
            fMap.set(n,1)
        }
        fMap.set(n,fMap.get(n)+1)
    }
    if(k>fMap.size){
        return;
    }
    
    let arr=[];
    for(let [key,value] of fMap){
        arr.push([key,value])
    }
    
   arr= arr.sort((a,b)=>b[1]-a[1])
   let result=[]
   for(let i=0;i<k;i++){
       result.push(arr[i][0])
   }
   return result;
   
    
};