function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant[completion.length];
}

// 해시 이용
// 맵을 만들때 요소 : 1, ... 으로 만들고 요소가 있을때 마다 +1을 한다.
// 다음 요소를 검사할때 -1씩 더한다.
// 그 결과 완주한 선수들은 value로 0을 가지게 되고, 완주하지 못한 선수는 1을 가진다.
// 이름이 중복된 선수는 value가 2-1로 1이 되므로 똑같이 완주하지 못한 선수로 간주된다.
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [elm, num] of map) {
    if (num > 0) return elm;
  }
}
