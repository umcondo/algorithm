function solution(s) {
  s = [...s];
  s.sort(sortFunction);
  function sortFunction(a, b) {
    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  }
  return s.join("");
}

/*
sort(comparefunction)
comparefunction을 공백으로 하면 a,b 값을 문자열로 바꾼 후 유니코드를 기준으로 오름차순으로 정렬한다.
comparefunction(a,b)의 반환값이 -1이면 a가 b보다 크게 정렬한다 b,a이런식
반환값이 1이면 a가 b보다 작게 정렬한다 a,b 이런식
sort 메소드는 본 배열을 정렬하고, 정렬된 배열을 리턴한다.

배열의 reverse 메소드는 배열의 요소를 거꾸로 뒤집어 반환한다.
본 배열 또한 변환된다.

function solution(s) {
    return [...s].sort().reverse().join("");
}
*/
