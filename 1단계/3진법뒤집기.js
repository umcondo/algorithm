function solution(n) {
  let b = n.toString(3);
  let c = [];
  for (let i = 0; i < b.length; i++) {
    c[i] = b[b.length - i - 1];
  }
  let a = c.join("");

  return parseInt(a, 3);
}

// 진법 변환, reverse, 스프레드 연산자 활용

function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}
