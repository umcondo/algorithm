function solution(nums) {
  const n = nums.length;
  let pickedPonketmon = [];
  let answer = 0;

  const setNum = [...new Set(nums)];
  // console.log(setNum.length < n ? );
  answer = setNum.length > n / 2 ? n / 2 : setNum.length;
  return answer;
}
