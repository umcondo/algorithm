function solution(array, commands) {
  // 원래 풀이 for문을 이용
  //     let answer = [];
  //     for(let i = 0; i< commands.length; i++){
  //         let [i2,j,k] = [commands[i][0] -1 , commands[i][1], commands[i][2]-1]

  //         answer.push(array.slice(i2,j).sort( (a,b) => {
  //             return a - b;
  //         })[k])
  //     }

  //     return answer

  // 해답보고 map을 이용함 push할 필요없이 바로 반환가능해서 좋다.
  return commands.map(
    (elm) => array.slice(elm[0] - 1, elm[1]).sort((a, b) => a - b)[elm[2] - 1]
  );
}
