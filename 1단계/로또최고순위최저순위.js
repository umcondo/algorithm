const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];
var answer = [];
let count = 0;
let countZero = 0;
// 당첨번호 리스트에 로또번호 요소들을 전부 들어있는지 검사한다.
lottos.forEach((el) => {
  count = win_nums.includes(el) ? count + 1 : count;
  countZero = el === 0 ? countZero + 1 : countZero;
  //   if (win_nums.includes(el) || el === 0) {
  //     count++;
  //   }
});
// console.log(count, countZero);
let count_min = 7 - count; // 최고 순위
let count_max = 7 - count - countZero; // 최소 순위

count_max = count_max === 7 ? 6 : count_max;
count_min = count_min === 7 ? 6 : count_min;
answer = [count_min, count_max];
// 들어있는 수를 count라 하면 0<=count<=6이다.
// 로또번호 중 0의 개수만큼 count를 더하여 최대를 구한다.
// 0이 다 맞았을때가 최대이고, 0이 다 틀렸을때가 최소이다.
// 7 - count가 순위이며 순위의 최대는 6이다.
// console.log(answer);
