    /**
     * @param {number[]} nums
     * @return {boolean}
     */
     
     
const containsDuplicate=(nums)=>{
//         for (let i = 0; i < nums.length; i++) {
//             for (let j = i + 1; j < nums.length; j++) {
//                 if (nums[i] === nums[j]) {
//                     return true;
//                 }
//             }
//         }

//sorting approach
//     const sorted=nums.sort((a,b)=>a-b)
//     for(let i=0;i<sorted.length;i++){
//         if(sorted[i]===sorted[i+1]){
//             return true;
//         }
//     }

//hashset approach
        const seen=new Set()
        for(let i=0;i<nums.length;i++){
            if(seen.has(nums[i])){
                return true;
            }
            seen.add(nums[i])
         }
         return false;

//hashset length approach

    // return new Set(nums).size<nums.length

}
