function solution(s, n) {
  let bigAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallAlphabet = bigAlphabet.toLowerCase();
  let curIndex = 0;
  let result = "";
  for (let elm of s) {
    if ([...bigAlphabet].includes(elm)) {
      curIndex = [...bigAlphabet].indexOf(elm);
      curIndex = curIndex + n;
      if (curIndex > 25) {
        curIndex = curIndex - 26;
      }
      result += [...bigAlphabet][curIndex];
    } else if ([...smallAlphabet].includes(elm)) {
      curIndex = [...smallAlphabet].indexOf(elm);
      curIndex = curIndex + n;
      if (curIndex > 25) {
        curIndex = curIndex - 26;
      }
      result += [...smallAlphabet][curIndex];
    } else {
      result += " ";
    }
  }
  return result;
}
