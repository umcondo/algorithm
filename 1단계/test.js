const a = ["a h", "b d", "c d", "a"];

// console.log([...new Set(a)]);

const b = new Array(5).fill("0");
// console.log(b);

const c = a.map((elm) => elm.split(" "));
const d = a.map((elm) => elm.replace(" ", ""));

// console.log(c);
// console.log(d);

const lottos = [44, 1, 0, 0, 31, 25];

let zero = lottos.filter((v) => !v);

// console.log(zero);

let list1 = [1, 2];
let list2 = [3, 4];

let list3 = [1, 0];
if (0 === 1) {
  list1 = list3;
} else if (2 === 2) {
  list2 = list3;
}

console.log(list1, list2);
