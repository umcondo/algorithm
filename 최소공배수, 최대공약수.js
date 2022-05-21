function solution(n, m) {
  let g = 0;
  let l = 0;
  for (let i = 1; i < n + 1; i++) {
    if (!(n % i) && !(m % i)) {
      g = i;
    }
  }
  if (g === 1) {
    l = n * m;
  } else {
    l = (n * m) / g;
  }

  return [g, l];
}

/* 유클리드 호제법
최대 공약수를 찾는 알고리즘
a > b인 정수 a,b에 대해 a = b * q + r이라 하면 a,b의 최대공약수는 b,r의 최대공약수와 같다.
a = GA, b = GB라 하자 (G는 최대공약수 A,B는 서로소)
GA = GB * q + r
G(kB - A) = r
G는 r의 약수다. 
서로소인 k,l에 대해
r = G'k = Gmk, b = GB = G'l = Gml
qGml - AG = Gmk
qml - mk = A;
A = m(ql - k);
m은 A,B의 공약수인데 A,B는 서로소라 m은 항상 1이다.
그러므로 G' 은 G다.

*/
function solution(n, m) {
  let [a, b] = [Math.max(n, m), Math.min(n, m)];
  let r = a % b;
  while (r) {
    a = b;
    b = r;
    r = a % b;
    // console.log(a,b,r);
  }
  return [b, (n * m) / b];
}
