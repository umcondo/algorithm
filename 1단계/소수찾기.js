function solution(n) {
  // 1~n까지 수에서
  // 1을 제외
  // 2를 제외하고 2로 나누어떨어지는 수 모두 제외
  // 3을 제외하고 3로 나누어떨어지는 수 모두 제외
  // .... sqrt(n)까지 진행

  let list = new Set();
  for (let i = 2; i <= n; i++) list.add(i);

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (list.has(i)) {
      for (let j = i * 2; j <= n; j += i) {
        list.delete(j);
      }
    }
    // i로 나누어떨어지면 없앰, i는 남김
  }
  return list.size;
}
// ============================ 리스트 이용 ======================

function solution(n) {
  // 1~n까지 수에서
  // 1을 제외
  // 2를 제외하고 2로 나누어떨어지는 수 모두 제외
  // 3을 제외하고 3로 나누어떨어지는 수 모두 제외
  // .... sqrt(n)까지 진행

  let list = [];
  for (let i = 0; i <= n; i++) list.push(i); // 0~n까지
  list[0] = 0; // 0은 소수아님
  list[1] = 0; // 1은 소수아님
  for (let i = 2; i * i < n; i++) {
    // sqrt(n)까지 수로 나눠본다. 그 이상은 중복됨
    if (list[i]) {
      // i가 0이면 실행 안함
      for (let j = i * i; j <= n; j += i) {
        // i * 2가 아니라 i * i 부터 시작하는 이유
        // i === 2이면, j는 2 * 2다.
        // i === 3이면, j는 3 * 3부터 시작, 3 * 2는 2의 배수로 이전에 삭제
        // i === 4이면, j는 4 * 4부터 시작, 4 * 2, 4 * 3은 2와, 3의 배수로 이전에 삭제
        // 즉 i보다 작은 수들의 배수로 이전에 삭제되었기 때문이다.
        list[j] = 0;
      }
    }
  }
  // console.log(list);
  return list.filter((elm) => elm).length;
}
