function solution(priorities, location) {
  const result = [];

  const index = priorities.map((elm, idx) => idx);

  while (priorities.length > 0) {
    const maxNum = Math.max(...priorities);

    // console.log(priorities);
    // console.log(index);
    if (priorities[0] === maxNum) {
      result.push(index.shift());
      priorities.shift();
    } else {
      priorities.push(priorities.shift());
      index.push(index.shift());
    }
  }

  return result.indexOf(location) + 1;
}
