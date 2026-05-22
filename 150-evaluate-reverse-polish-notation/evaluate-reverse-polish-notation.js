/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  console.log(tokens);
  for (let token of tokens) {
    console.log(token);
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      let num1 = stack.pop();
      let num2 = stack.pop();

      let operand = token;
      console.log(num1, operand, num2);
      switch (operand) {
        case "+":
          stack.push(num2 + num1);
          break;
        case "-":
          stack.push(num2 - num1);
          break;
        case "*":
          stack.push(num2 * num1);
          break;
        case "/":
          stack.push(Math.trunc(num2 / num1));
          break;
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
};