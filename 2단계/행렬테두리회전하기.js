function solution(rows, columns, queries) {
  // 행렬 만들기
  const array = new Array(rows)
    .fill(0)
    .map((elm) => new Array(columns).fill(0));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      array[i][j] = j + 1 + i * columns;
    }
  }

  // 회전
  // (2,2,5,4)
  // column : 2 ~ 5, row : 2 ~ 4
  // array[2][2] ~ array[5][4]
  // array[2][2] ~ array[3][2] 까지는 오른쪽 한칸 이동
  // array[4][2] ~ array[4][4] 까지는 아래 한칸 이동
  // array[4][5] ~ array[3][5] 까지는 왼쪽 한칸 이동
  // array[2][5] ~ array[2][3] 까지는 위쪽 한칸 이동

  const result = [];
  for (let query of queries) {
    const [x1, y1, x2, y2] = query;
    const stack = [];
    // 윗 가로
    for (let i = y1; i < y2; i++) {
      if (array[x1 - 1]) stack.push(array[x1 - 1][i - 1]);
    }
    // 오른쪽 세로
    for (let i = x1; i < x2; i++) {
      if (array[i - 1]) stack.push(array[i - 1][y2 - 1]);
    }
    // 아래
    for (let i = y2; i > y1; i--) {
      if (array[x2 - 1]) stack.push(array[x2 - 1][i - 1]);
    }
    // 왼쪽
    for (let i = x2; i > x1; i--) {
      if (array[i - 1]) stack.push(array[i - 1][y1 - 1]);
    }
    // console.log(stack);
    result.push(Math.min(...stack));

    // 기존 array 변환
    for (let i = y1 + 1; i <= y2; i++) {
      if (array[x1 - 1]) array[x1 - 1][i - 1] = stack.shift();
    }

    for (let i = x1 + 1; i <= x2; i++) {
      if (array[i - 1]) array[i - 1][y2 - 1] = stack.shift();
    }

    for (let i = y2 - 1; i >= y1; i--) {
      if (array[x2 - 1]) array[x2 - 1][i - 1] = stack.shift();
    }

    for (let i = x2 - 1; i >= x1; i--) {
      if (array[i - 1]) array[i - 1][y1 - 1] = stack.shift();
    }
    // console.log(Math.min(...stack));
    // result.push(Math.min(...stack))
    // console.log(array);
  }
  return result;
}

// 다른 풀이 보고 개선
// 배운점) 배열 생성, 동적 계획법, temp 변수 사용

function solution(rows, columns, queries) {
  // 행렬 만들기
  const array = [...Array(rows)].map((_, idx) =>
    [...Array(columns)].map((_, idx2) => idx2 + 1 + columns * idx)
  );

  const mins = [];
  for (query of queries) {
    const [x1, y1, x2, y2] = query.map((elm) => elm - 1);
    // 2,2,5,4
    let min = array[x1][y1]; // 동적 계획법을 이용하여 최솟값을 갱신하는 식으로 한다.
    let temp = array[x1][y1]; // 왼쪽부터 회전하면서 첫번째 항을 바로 지우기 때문에 기억해 둔다.

    // 오른쪽으로 회전하면서 차례로 빈값을 채운다.

    // 왼쪽
    for (let i = x1; i < x2; i++) {
      array[i][y1] = array[i + 1][y1];
      min = Math.min(min, array[i][y1]);
    }
    // 맨 아래
    for (let i = y1; i < y2; i++) {
      array[x2][i] = array[x2][i + 1];
      min = Math.min(min, array[x2][i]);
    }
    // 오른쪽
    for (let i = x2; i > x1; i--) {
      array[i][y2] = array[i - 1][y2];
      min = Math.min(min, array[i][y2]);
    }
    // 맨 위
    for (let i = y2; i > y1; i--) {
      array[x1][i] = array[x1][i - 1];
      min = Math.min(min, array[x1][i]);
    }
    array[x1][y1 + 1] = temp;

    mins.push(min);
  }
  return mins;
}
