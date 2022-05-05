function solution(s) {
  if (s.length % 2 === 1) {
    return s[Math.floor(s.length / 2)];
  }
  return s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
}

// substring 이용

function solution(s) {
  const a = Math.ceil(s.length / 2) - 1;
  return s.subString(a, s.length % 2 === 1 ? a + 1 : a + 2);
}
