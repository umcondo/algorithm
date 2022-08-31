// 8.31 특정 기업 알고리즘 테스트 중 하나 reverse를 쓰지 않고 기존 배열을 뒤집어라.

a = [1, 2, 3, 4, 5];

function reverseArray(array) {
  const b = [...array];
  array.forEach((elm, idx) => (array[idx] = b[array.length - 1 - idx]));
}

console.log(reverseArray(a), a);
