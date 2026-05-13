/**
 * @param {number} x
 * @return {boolean}
 */

 //palindrome number by comparing the reversed number with the original number
const isPalindrome = function(x) {
   if(x<0) return false;
    let reversed=0;
    let rem=0;
    let copy=x;
        while(copy!==0){
            rem=copy%10;
            reversed=(reversed*10)+rem
            copy=Math.floor(copy/10)
        }
    if(reversed===x)return true;

    return false;
};