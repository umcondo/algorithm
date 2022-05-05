function solution(n) {
  for (let x = 1; x < n + 1; x++) {
    if (n % x === 1) return x;
  }
}
