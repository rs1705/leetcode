/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    //MONOTONIC STACK APPROACH
    let stack=[]
    let ans= new Array(temperatures.length).fill(0)
    for(let i=0;i<temperatures.length;i++){
        while(stack.length>0 && temperatures[i]>temperatures[stack[stack.length-1]]){
            let previousIndex=stack.pop();
            ans[previousIndex]=i-previousIndex;
        }
        stack.push(i)
    }
    return ans;
};