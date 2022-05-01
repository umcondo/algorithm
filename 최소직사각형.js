function solution(sizes) {
  // 한쪽이 다른쪽보다 무조건 크게 배열을 다시 정렬한다.
  const answer = sizes.map((elm) =>
    elm[0] >= elm[1] ? [elm[0], elm[1]] : [elm[1], elm[0]]
  );
  // 각 배열에서 가장 큰 값을 구해 곱한다.
  let leftSize = answer.map((elm) => elm[0]);
  let rightSize = answer.map((elm) => elm[1]);

  return Math.max(...leftSize) * Math.max(...rightSize);
}
