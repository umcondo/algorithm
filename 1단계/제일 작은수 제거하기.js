function solution(arr) {
  if (arr.length === 1) return [-1];

  let smallNum = arr[0];
  for (let num of arr) {
    smallNum = num > smallNum ? smallNum : num;
  }

  return arr.filter((elm) => elm !== smallNum);
}

function solution(arr) {
  if (arr.length === 1) return [-1];

  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr;
}
