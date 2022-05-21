function solution(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const result2 = [];
    for (let j = 0; j < arr1[0].length; j++) {
      result2[j] = arr1[i][j] + arr2[i][j];
    }
    result.push(result2);
  }
  return result;
}

// map 이용

function solution(arr1, arr2) {
  return arr1.map((elm, idx) =>
    elm.map((elm2, idx2) => elm2 + arr2[idx][idx2])
  );
}
