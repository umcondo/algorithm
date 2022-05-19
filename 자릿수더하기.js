function solution(n) {
  let answer = 0;
  for (let num of n + "") answer += +num;
  return answer;
}
