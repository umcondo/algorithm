function solution(numbers, target) {
  let answer = 0;
  const length = numbers.length;

  // 재귀함수를 이용한 DFS 풀이 count : 재귀의 깊이(numbers의 인덱스), sum : 현재 부분합
  function dfs(count, sum) {
    if (count === length) {
      if (target === sum) {
        // 재귀 마지막에 현재 값이 목표값과 같다면 answer를 하나 올린다.
        answer++;
      }
      // 재귀 깊이가 마지막에 이르면(numbers의 인덱스를 모두 탐색했다면) 재귀함수를 종료한다.
      return;
    }

    // 현재 값에 더하는 경우
    dfs(count + 1, sum + numbers[count]);

    // 현재 값에 빼는 경우
    dfs(count + 1, sum - numbers[count]);
  }

  // 첫 노드부터 탐색시작
  dfs(0, 0);

  return answer;
}

// 한시간 반 고민 후 못 풀었다.
// 풀이를 보고 붙여넣었다. 코드는 이해를 했지만 추후 다시 풀어봐야겠다.
