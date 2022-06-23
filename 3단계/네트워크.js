function solution(n, computers) {
  /*
    DFS 깊이우선탐색
    각 노드들을 순서대로 스택에 넣는다.
    노드를 방문처리하고 반환한다.
    연결된 노드 중 방문하지 않은 노드를 스택에 넣는다.
    스택에 아무것도 없을때까지 반복한다.
    
    이 문제에선 방문여부가 중요하다.
    스택은 중요하지 않다.
    DFS알고리즘을 통해 같이 묶인 노드들을 네트워크라고 한다면
    방문하지 않고 연결되지 않은 노드 하나당 네트워크 수를 늘린다.
    */
  let result = 0;
  const computerNum = computers.length;
  const computerVisited = new Array(computerNum).fill(false);

  const dfs = (index) => {
    computerVisited[index] = true; // 방문한 노드 체크
    for (let i = 0; i < computerNum; i++) {
      if (!computerVisited[i] && computers[index][i]) {
        // 방문하지 않았고 연결되어있다면
        dfs(i); // 연결된 노드도 반복
      }
    }
  };
  for (let i = 0; i < computerNum; i++) {
    // 전체 컴퓨터에 대해
    if (!computerVisited[i]) {
      // 방문하지 않았다면
      dfs(i); // dfs
      result++; // dfs로 묶인 네트워크 하나당 결과값을 더한다.
    }
    // console.log(computerVisited);
  }
  return result;
}
