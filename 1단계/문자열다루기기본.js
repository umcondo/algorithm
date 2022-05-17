function solution(s) {
  const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i of s) {
    if (!num.includes(+i)) return false;
  }
  return s.length === 4 || s.length === 6;
}
