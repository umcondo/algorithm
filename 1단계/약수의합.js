function solution(n) {
  result = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) result += i;
  }
  return result;
}
