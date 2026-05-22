/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (let token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      let num2 = stack.pop();
      let num1 = stack.pop();
      switch (token) {
        case "+":
          stack.push(num1 + num2);
          break;
        case "-":
          stack.push(num1 - num2);
          break;
        case "*":
          stack.push(num1 * num2);
          break;
        case "/":
          stack.push(Math.trunc(num1 / num2));
          break;
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
};