/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let bestbuy = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > bestbuy) {
      maxProfit = Math.max(maxProfit, prices[i] - bestbuy);
    }
    bestbuy = Math.min(bestbuy, prices[i]);
  }
  return maxProfit;
};