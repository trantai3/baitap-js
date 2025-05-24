function precedence(op) {
  if (op === "+" || op === "-") return 1;
  if (op === "*" || op === "/") return 2;
  return 0;
}

function infixToPostfix(infix) {
  const stack = [];
  let postfix = "";
  let i = 0;

  while (i < infix.length) {
    const token = infix[i];

    if (token === " ") {
      i++;
      continue;
    }

    if (/[a-zA-Z0-9]/.test(token)) {
      let operand = "";
      while (i < infix.length && /[a-zA-Z0-9]/.test(infix[i])) {
        operand += infix[i];
        i++;
      }
      postfix += operand + " ";
      continue;
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        postfix += stack.pop() + " ";
      }
      stack.pop();
    } else {
      // toán tử
      while (
        stack.length > 0 &&
        precedence(token) <= precedence(stack[stack.length - 1])
      ) {
        postfix += stack.pop() + " ";
      }
      stack.push(token);
    }
    i++;
  }

  while (stack.length > 0) {
    postfix += stack.pop() + " ";
  }

  return postfix.trim();
}

function evaluatePostfix(postfix) {
  const stack = [];
  let i = 0;

  while (i < postfix.length) {
    if (postfix[i] === " ") {
      i++;
      continue;
    }

    if (/\d/.test(postfix[i])) {
      let num = "";
      while (i < postfix.length && /\d/.test(postfix[i])) {
        num += postfix[i];
        i++;
      }
      stack.push(parseFloat(num));
      continue;
    } else {
      const op1 = stack.pop();
      const op2 = stack.pop();
      const op = postfix[i];

      let res;
      switch (op) {
        case "+":
          res = op2 + op1;
          break;
        case "-":
          res = op2 - op1;
          break;
        case "*":
          res = op2 * op1;
          break;
        case "/":
          res = op2 / op1;
          break;
        case "%":
          res = op2 % op1;
          break;
        default:
          throw new Error("Invalid operator: " + op);
      }
      stack.push(res);
      i++;
    }
  }

  return stack.pop();
}

const infixExpr1 = "(1+2)*3-4/(2+2)";
const infixExpr2 = "(3+4)*3-4/(2+2) + 2";
const postfixExpr1 = infixToPostfix(infixExpr1);
const postfixExpr2 = infixToPostfix(infixExpr2);
console.log("Postfix 1:", postfixExpr1);
console.log("Postfix 2:", postfixExpr2);

const result1 = evaluatePostfix(postfixExpr1);
const result2 = evaluatePostfix(postfixExpr2);
console.log("Result 1:", result1);
console.log("Result 2:", result2);

module.exports = infixToPostfix;
