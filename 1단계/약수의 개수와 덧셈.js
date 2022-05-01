function solution(left, right) {
  let answer = 0;
  for (left; left <= right; left++) {
    let divide = 0;
    for (let i = 1; i <= left; i++) {
      left % i === 0 ? divide++ : divide;
    }
    answer += divide % 2 === 0 ? left : -left;
  }
  return answer;
}

// 약수의 개수 원리를 이용
function solution(left, right) {
  let answer = 0;
  for (left; left <= right; left++) {
    answer += Math.sqrt(left) === Math.round(Math.sqrt(left)) ? -left : left;
  }
  return answer;
}
