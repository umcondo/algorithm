var answer = 0;
const numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((elm) => {
  if (numList.includes(elm)) {
    numList[elm] = 0;
  }
});
for (elm of numList) {
  answer += elm;
}
return answer;
