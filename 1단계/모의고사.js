function solution(answers) {
  const noMath1 = [1, 2, 3, 4, 5];
  const noMath2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const noMath3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  // ...noMath1
  let [score1, score2, score3] = [0, 0, 0];
  let answer = [];

  // 인덱스를 각 배열의 길이로 나눈 나머지
  answers.forEach((elm, idx) => {
    elm === noMath1[idx % noMath1.length] ? score1++ : score1;
  });
  answers.forEach((elm, idx) => {
    elm === noMath2[idx % noMath2.length] ? score2++ : score2;
  });
  answers.forEach((elm, idx) => {
    elm === noMath3[idx % noMath3.length] ? score3++ : score3;
  });

  let score = [score1, score2, score3];
  score.forEach((elm, i) => {
    elm === Math.max(...score) ? answer.push(i + 1) : answer;
  });

  return answer;
}
