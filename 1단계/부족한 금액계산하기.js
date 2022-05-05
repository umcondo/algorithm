function solution(price, money, count) {
  var answer = -1;
  let currentMoney = 0;
  for (let i = 1; i < count + 1; i++) {
    currentMoney += price * i;
  }
  answer = money >= currentMoney ? 0 : currentMoney - money;
  return answer;
}

// 가우스 공식 이용

function solution(price, money, count) {
  const currentMoney = ((count * (count + 1)) / 2) * price;
  return money >= currentMoney ? 0 : currentMoney - money;
}
