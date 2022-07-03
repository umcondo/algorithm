function solution(clothes) {
  // 종류 별 의상 개수를 구한다
  // 종류 별 의상 개수 + 1(해당 종류를 안입을 경우) 한 값들을 서로 곱한 값 - 1을 리턴한다.

  const clothEntries = {};
  for (cloth of clothes) {
    // console.log(cloth[1]);
    // if(!clothEntries[cloth[1]]){ // 새로운 종류의 의상일 경우
    //     clothEntries[cloth[1]] = [cloth[0]];
    // }else{ // 해당 종류가 있을 경우
    //     clothEntries[cloth[1]].push(cloth[0]);
    // }
    clothEntries[cloth[1]] = [...(clothEntries[cloth[1]] || []), cloth[0]];
  }
  // console.log(clothEntries);
  const clothEntriesCounts = Object.values(clothEntries).map(
    (elm) => elm.length
  );
  return clothEntriesCounts.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}

// 다른 풀이 보고 수정

function solution(clothes) {
  // 종류 별 의상 개수를 구한다
  // 종류 별 의상 개수 + 1(해당 종류를 안입을 경우) 한 값들을 서로 곱한 값 - 1을 리턴한다.

  const clothEntriesCounts = {};
  for (cloth of clothes) {
    clothEntriesCounts[cloth[1]] = (clothEntriesCounts[cloth[1]] || 0) + 1;
  }
  const answer = Object.values(clothEntriesCounts).reduce(
    (acc, cur) => acc * (cur + 1),
    1
  );

  return answer - 1;
}
