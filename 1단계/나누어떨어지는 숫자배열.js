function solution(arr, divisor) {
  answer = arr.filter((elm) => elm % divisor === 0).sort((a, b) => a - b);
  return answer.length === 0 ? [-1] : answer;
}
