function solution(dartResult) {
  let sum = 0;
  let subSum = 0;
  let num = [];
  let subSumBox = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (+dartResult[i] >= 0) {
      if (+dartResult[i + 1] === 0) {
        num.push(10);
      } else if (+dartResult[i - 1] === 1) {
        //
      } else {
        num.push(+dartResult[i]);
      }
    }
    if (["S", "D", "T"].includes(dartResult[i])) {
      const currentNum = num[num.length - 1];
      if (dartResult[i] === "S") {
        subSum = currentNum;
      } else if (dartResult[i] === "D") {
        subSum = currentNum * currentNum;
      } else if (dartResult[i] === "T") {
        subSum = currentNum * currentNum * currentNum;
      }
      subSumBox.push(subSum);
      subSum = 0;
    }

    if (dartResult[i] === "*") {
      subSumBox[subSumBox.length - 1] = subSumBox[subSumBox.length - 1] * 2;
      subSumBox[subSumBox.length - 2] = subSumBox[subSumBox.length - 2] * 2;
    }
    if (dartResult[i] === "#") {
      subSumBox[subSumBox.length - 1] = subSumBox[subSumBox.length - 1] * -1;
    }
    // console.log(subSumBox);
    sum = subSumBox.reduce((plus, cur) => plus + cur, 0);
  }
  return sum;
}
