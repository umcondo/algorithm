function solution(n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    answer[i] = i % 2 === 0 ? "수" : "박";
  }

  return answer.join("");
}

function solution(n) {
  return "수박".repeat(n / 2 + 1).slice(0, n);
}
