function solution(n) {
  let result = [];
  for (let i = 1; i <= n + "".length; i++) {
    result.push((n % 10 ** i) / 10 ** (i - 1));
    n = n - (n % 10 ** i);
  }

  return result;

  // return [...(n + "")].reverse().map(elm => +elm);
}
