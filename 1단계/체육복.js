function solution(n, lost, reserve) {
  var answer = 0;
  // 옷 예시
  // [2 0 2 0 2]
  // [1 0 2 0 1]
  // [2 1 0]
  // 총 n개
  // index i=1  ~ length-1까지
  // i-1, i+1이 0이면 list[i]-1하고 해당 list[i-1]+1 or list[i+1]+1 한다
  // 0보다 큰 원소의 개수를 filter로 뽑아 배열의 길이를 리턴
  let a = new Array(n);
  for (let i = 0; i < a.length; i++) {
    a[i] = 1;
  }
  lost.forEach((elm) => {
    a[elm - 1] = a[elm - 1] - 1;
  });
  reserve.forEach((elm) => {
    a[elm - 1] = a[elm - 1] + 1;
  });

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 2 && a[i - 1] === 0) {
      a[i] = a[i] - 1;
      a[i - 1] = a[i - 1] + 1;
    } else if (a[i] === 2 && a[i + 1] === 0) {
      a[i] = a[i] - 1;
      a[i + 1] = a[i + 1] + 1;
    }
  }

  return a.filter((elm) => elm > 0).length;
}
