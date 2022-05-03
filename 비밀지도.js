function solution(n, arr1, arr2) {
  const realArr1 = [];
  const realArr2 = [];
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let answer = arr1[i].toString(2);
    let answer2 = arr2[i].toString(2);
    while (answer.length < arr1.length) {
      answer = [0, ...answer].join("");
    }
    while (answer2.length < arr2.length) {
      answer2 = [0, ...answer2].join("");
    }
    realArr1.push(answer);
    realArr2.push(answer2);
  }
  // console.log(realArr1,realArr2);
  for (let i = 0; i < arr1.length; i++) {
    let verticalAnswer = "";
    for (let j = 0; j < arr1.length; j++) {
      verticalAnswer +=
        realArr1[i][j] === "0" && realArr2[i][j] === "0" ? " " : "#";
      // console.log(realArr1[i][j], realArr2[i][j], verticalAnswer);
    }
    answer.push(verticalAnswer);
  }
  // console.log(answer);
  return answer;
}

// padStart 이용

function solution(n, arr1, arr2) {
  const realArr1 = [];
  const realArr2 = [];
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let answer1 = arr1[i].toString(2).padStart(arr1.length, 0);
    let answer2 = arr2[i].toString(2).padStart(arr1.length, 0);

    let horizonAnswer = "";
    for (let j = 0; j < answer1.length; j++) {
      horizonAnswer += answer1[j] === "0" && answer2[j] === "0" ? " " : "#";
    }
    answer.push(horizonAnswer);
  }

  return answer;
}
