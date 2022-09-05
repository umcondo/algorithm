function solution(places) {
  // 맨해튼 거리가 2이하면 거리두기 지키지 않은 것
  // 단, 파티션이 사이에 있으면 지킨 것
  // 빈 테이블이 사이에 있으면 지키지 않은 것
  // 5 x 5 행렬 5개
  // const place = ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"];

  const check = (place) => {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === "P") {
          place[i][j] += 1; //checked
          // 맨해튼 거리 2이하로 P가 있는지 확인
          // 거리 0 : [0,0]
          // 거리 1 : [1,0],[0,1],[0,-1],[-1,0]
          // 거리 2 : [1,1],[-1,1],[1,-1],[-1,-1],[2,0],[0,2],[0,-2],[-2,0]
          const distance = [
            [1, 0],
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 1],
            [-1, 1],
            [1, -1],
            [-1, -1],
            [2, 0],
            [0, 2],
            [0, -2],
            [-2, 0],
          ];

          for (let xy of distance) {
            let x = i - xy[0];
            let y = j - xy[1];
            if (x >= 0 && y >= 0 && x <= 4 && y <= 4) {
              if (place[x][y] === "P") {
                // console.log([x,y], [i,j]);
                if (Math.abs(i - x) + Math.abs(j - y) < 2) {
                  return 0;
                } else if (xy[0] === 0 && xy[1] === 2) {
                  if (place[x][y + 1] === "O") return 0;
                } else if (xy[0] === 0 && xy[1] === -2) {
                  if (place[x][y - 1] === "O") return 0;
                } else if (xy[0] === 2 && xy[1] === 0) {
                  if (place[x + 1][y] === "O") return 0;
                } else if (xy[0] === -2 && xy[1] === 0) {
                  if (place[x - 1][y] === "O") return 0;
                } else if (xy[0] === 1 && xy[1] === 1) {
                  if (place[x][y + 1] === "O" || place[x + 1][y] === "O")
                    return 0;
                } else if (xy[0] === -1 && xy[1] === 1) {
                  if (place[x - 1][y] === "O" || place[x][y + 1] === "O")
                    return 0;
                } else if (xy[0] === 1 && xy[1] === -1) {
                  if (place[x + 1][y] === "O" || place[x][y - 1] === "O")
                    return 0;
                } else if (xy[0] === -1 && xy[1] === -1) {
                  if (place[x - 1][y] === "O" || place[x][y - 1] === "O")
                    return 0;
                }
              }
            }
          }
        }
      }
    }
    return 1;
  };

  const result = [];
  for (let place of places) {
    result.push(check(place));

    // console.log(result);
  }
  return result;
}
