let numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
hand = "right";
var answer = "";
// 3 x 4 행렬
const pad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];
// 왼손 시작 pad[3][0], 오른손 시작 pad[3][2]
let leftPadIndex = [3, 0];
let rightPadIndex = [3, 2];
// numbers가 [1,4,7] 이면 왼손 위치 이동
// numbers가 [3,6,9] 이면 오른손 위치 이동
// numbers가 [2,5,8,0]이면 현재 더 가까운 손이 이동
// 이때 두 손의 위치가 같다면 어떤 손을 주로 쓰는 지에 따라 이동
let currentIndex = [];
for (let k = 0; k < numbers.length; k++) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (pad[i][j] === numbers[k]) {
        currentIndex = [i, j];
      }
    }
  }
  if ([1, 4, 7].includes(numbers[k])) {
    leftPadIndex = currentIndex;
    answer += "L";
    // console.log('L')
    // console.log('leftPadIndex:',leftPadIndex,'rightPadIndex:',rightPadIndex,answer);
  } else if ([3, 6, 9].includes(numbers[k])) {
    rightPadIndex = currentIndex;
    answer += "R";

    // console.log('R')
    // console.log('leftPadIndex:',leftPadIndex,'rightPadIndex:',rightPadIndex,answer);
  } else {
    // 거리계산
    let x = Math.abs(leftPadIndex[0] - currentIndex[0]);
    let y = Math.abs(leftPadIndex[1] - currentIndex[1]);
    let leftDistance = x + y;
    let x2 = Math.abs(rightPadIndex[0] - currentIndex[0]);
    let y2 = Math.abs(rightPadIndex[1] - currentIndex[1]);
    let rightDistance = x2 + y2;

    console.log(rightDistance, leftDistance);

    if (rightDistance === leftDistance) {
      if (hand === "right") {
        answer += "R";
        rightPadIndex = currentIndex;
      } else {
        answer += "L";
        leftPadIndex = currentIndex;
      }
    } else if (rightDistance > leftDistance) {
      leftPadIndex = currentIndex;
      answer += "L";
    } else {
      rightPadIndex = currentIndex;
      answer += "R";
    }
    // console.log('leftPadIndex:',leftPadIndex,'rightPadIndex:',rightPadIndex,answer);
  }
}
// numbers 첫 인덱스부터 pad의 인덱스를 알아본다. 예) 1이면 0,0 // 6이면 1,2
// 현재 손의 인덱스를 알아보고 numbers 현재숫자의 인덱스와 거리를 비교한다.
// 거리가 짧은 손을 선택한다.
// 거리가 같으면 hand에 따라 선택

// 번호를 누른 손을 answer에 더한다.

console.log(answer);
