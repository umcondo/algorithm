function solution(arr) {
  const newArr = [];
  for (let elm of arr) {
    if (newArr[newArr.length - 1] !== elm) newArr.push(elm);
  }
  return newArr;
}

// filter 사용
function solution(arr) {
  return arr.filter((elm, idx, arr) => elm !== arr[idx + 1]);
}
