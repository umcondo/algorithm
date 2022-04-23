let answer = 0;
for (let i = 0; i < a.length; i++) {
  answer += a[i] * b[i];
}
// return answer;

// use reduce
// return a.reduce( (acc,cur,idx) => acc + cur * b[idx] , 0);
