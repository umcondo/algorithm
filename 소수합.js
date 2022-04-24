let result = 0;
let resultNums = [];
// 조합구하기
for (let i = 0; i < nums.length - 2; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      resultNums.push(nums[i] + nums[j] + nums[k]);
    }
  }
}
for (elm of resultNums) {
  ans(elm);
}
function ans(sum) {
  for (let l = 2; l <= Math.sqrt(sum); l++) {
    if (sum % l === 0) return false;
  }
  result++;
}
