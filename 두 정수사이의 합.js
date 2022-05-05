function solution(a, b) {
  let answer = 0;
  if (a > b) [a, b] = [b, a];
  for (let i = a; i < b + 1; i++) {
    answer += i;
  }
  return answer;
}

// 가우스 공식 이용

function solution(a, b) {
  let answer = 0;
  if (a > b) [a, b] = [b, a];
  answer = (b * (b + 1)) / 2 - (a * (a - 1)) / 2;
  return answer;
}
