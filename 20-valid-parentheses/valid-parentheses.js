/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  print() {
    console.log(this.stack);
  }
}

  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (stack.isEmpty()) {
        return false;
      }
      if (s[i] === ")" && stack.peek() === "(") {
        stack.pop();
      } else if (s[i] === "]" && stack.peek() === "[") {
        stack.pop();
      } else if (s[i] === "}" && stack.peek() === "{") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.isEmpty()) {
    return true;
  } else {
    return false;
  }
};