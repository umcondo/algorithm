function solution(s) {
  var answer = true;
  let countP = 0;
  let countY = 0;

  for (let i of s.toLowerCase()) {
    if (i === "p") countP++;
    if (i === "y") countY++;
  }
  answer = countP === countY ? false : true;
  return !answer;
}
