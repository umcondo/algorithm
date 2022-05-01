function solution(d, budget) {
  d.sort((a, b) => a - b);
  let result = 0;
  let acc = 0;
  for (let i = 0; i < d.length; i++) {
    acc = acc + d[i];
    if (budget - acc >= 0) {
      result++;
    } else {
      break;
    }
  }
  return result;
}
