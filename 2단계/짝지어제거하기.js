function solution(s) {
  // 스택
  const stack = [];
  for (let i of s) {
    stack.push(i);
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }

  return !stack.length ? 1 : 0;
}

// 항상 시간복잡도를 생각해보자...
