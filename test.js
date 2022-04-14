const a = ["a h", "b d", "c d", "a"];

console.log([...new Set(a)]);

const b = new Array(5).fill("0");
console.log(b);

const c = a.map((elm) => elm.split(" "));
const d = a.map((elm) => elm.replace(" ", ""));

console.log(c);
console.log(d);
