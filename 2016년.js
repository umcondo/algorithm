function solution(a, b) {
  let answer = new Date("2016", a - 1, b).getDay();
  // console.log(answer);

  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][answer];
}

function solution(a, b) {
  let answer = new Date("2016", a - 1, b).toString().slice(0, 3).toUpperCase();

  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][answer];
}
