function solution(s) {
  // 시간 초과
  // let answer = s.replace(/\(\)/g,'');
  // while(true){
  //     answer = answer.replace(/\(\)/g,'');
  //     if(answer === ''){
  //         return true;
  //     }else if(answer.length < 3 && answer !== '()'){
  //         return false;
  //     }
  // }

  // 내 풀이
  const stack = [];
  for (let i of s) {
    stack.push(i);
    if (stack[0] === ")") return false;
    if (stack[stack.length - 1] === ")" && stack[stack.length - 2] === "(") {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length ? false : true;

  // 다른 풀이 - 시간초과, slice로 문자열을 읽는 시간이 오래걸리는듯하다.
  // let chars = '';
  // for(let char of s){
  //     chars += char;
  //     // if(chars.slice(-2,) === '()'){
  //     //     chars = chars.slice(0,-2);
  //     // }
  //     if(chars[chars.length-2] + chars[chars.length-1] === '()'){
  //         // chars = chars.slice(0,-2);
  //         chars = chars.replace('()',"");
  //     }
  // }
  // // console.log(chars);
  // return chars ? false : true;

  // 다른 사람 풀이 - 시간초과
  //     let stack = 0;

  //     for(let char of s){
  //         stack += char === '(' ? 1 : -1;
  //         if(stack < 0) return false;
  //     }
  //     return stack ? false : true;
}
