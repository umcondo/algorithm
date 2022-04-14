var answer = [];
let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
  "muzi neo",
];
const k = 2;
/* 
    1. 아이디 당 신고리스트 작성
    2. 아이디당 신고 횟수 리스트에 +1
    3. k보다 크거나 같은 아이디 반환
    4. 아이디당 신고한 리스트와 비교후 k보다 큰 아이디가 있으면
       answer의 index에 +1
    */
const id_reported_list = {};
const id_report_list2 = {};
const id_report_count = {};
const id_count_bigger_k = [];
const arrest = [];

report = report.map((elm) => {
  return elm.split(" ");
});

console.log(report);

// 신고당한 리스트
for (let i = 0; i < report.length; i++) {
  if (
    //신고당한 리스트의 키값에 신고당한 사람이름이 없으면 신고한 사람을 밸류로 넣는다
    id_reported_list[report[i][1]]
  ) {
    id_reported_list[report[i][1]].push(report[i][0]);
    // Set Array.from으로 중복된 값을 제거한다.
    let a = new Set(id_reported_list[report[i][1]]);
    id_reported_list[report[i][1]] = Array.from(a);
  } else {
    id_reported_list[report[i][1]] = [report[i][0]];
  }
}

// console.log(id_reported_list);

// 신고한 리스트
for (let i = 0; i < report.length; i++) {
  if (id_report_list2[report[i][0]]) {
    id_report_list2[report[i][0]].push(report[i][1]);
    let a = new Set(id_report_list2[report[i][0]]);
    id_report_list2[report[i][0]] = Array.from(a);
  } else {
    id_report_list2[report[i][0]] = [report[i][1]];
  }
}

// console.log(id_report_list2);
// console.log(id_report_list);

//신고 받은 횟수
for (let i = 0; i < id_list.length; i++) {
  if (id_reported_list[id_list[i]]) {
    id_report_count[id_list[i]] = id_reported_list[id_list[i]].length;
  } else {
    id_report_count[id_list[i]] = 0;
  }
}
// console.log(id_report_count);

// k번 이상 신고당한 사람
for (let i = 0; i < id_list.length; i++) {
  if (id_report_count[id_list[i]] >= k) {
    arrest.push(id_list[i]);
  }
}

// console.log(arrest);

// 신고한 리스트에서 k번 이상 신고당한 사람들만큼 count를 올린다.
for (let i = 0; i < id_list.length; i++) {
  let a = 0;
  if (id_report_list2[id_list[i]]) {
    id_report_list2[id_list[i]].forEach((elm) => {
      if (arrest.includes(elm)) {
        a += 1;
      }
    });
  }
  answer.push(a);
}

// answer를 리턴한다
