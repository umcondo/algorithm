function solution(N, stages) {
  // const failbox = new Map();
  const failbox = [];
  const result = [];
  let reached = stages;

  for (let i = 1; i < N + 1; i++) {
    reached = reached.filter((elm) => !(elm === i));
    let reachedNum = reached.length;
    // console.log(reachedNum);
    let failNum = stages.filter((elm) => elm === i).length;
    let fail = failNum / reachedNum;
    // console.log(failNum);
    failbox[i - 1] = [i, fail];
  }
  failbox.sort((a, b) => {
    return b[1] - a[1];
  });
  // console.log(failbox);
  let answer = failbox.map((elm) => elm[0]);
  // console.log(answer);
  return answer;
}
