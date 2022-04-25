var answer = 0;
// 2차원 배열
/*   [[0,0,0,0,0],
  [0,0,1,0,3],
  [0,2,5,0,1],
  [4,2,4,4,2],
  [3,5,1,3,1]] */
// moves의 첫 값부터 배열에서 뽑아
// stack에 하나씩 쌓는다
// moves의 2번째 인덱스부터 실행될때마다 stack의 첫값과 두번째 값을 비교하여 같으면 둘다 제거하고 result += 2
let stack = [];
for (let idx of moves) {
  for (let i = 0; i < board.length; i++) {
    // idx-1 : moves의 값-1 : 크레인으로 뽑아야할 박스의 index

    let selectedDoll = 0;
    if (board[i][idx - 1] !== 0) {
      selectedDoll = board[i][idx - 1];
      stack.push(selectedDoll);
      board[i][idx - 1] = 0;

      if (stack && stack.length > 1) {
        // 첫값과 두번째 값을 비교해서 같으면 둘다 제거하고 result += 2
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          stack.pop();
          stack.pop();
          answer += 2;
        }
      }
      break;
    }
  }
}
answer;
