/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //bruteforce
// var twoSum = function (nums, target) {
//     let result=[];
//     let flag=0
//     for(let i=0; i<nums.length;i++){        
//        let toFind=target-nums[i]
//        for(let j=i+1;j<nums.length;j++){
//             if(nums[j]===toFind){
//                 result.push(i,j)
//                 flag=1;
//                 break;
//             }
//        }
//        if(flag===1)break;
//     }
        
// return result;
// };


// var twoSum=(nums, target)=>{
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 return [i,j]
//             }
//         }
//     }
//     return [];
// }


//hashmap approach
const twoSum = (nums, target) => {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement) && numMap.get(complement) !== i) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }

  return [];
};