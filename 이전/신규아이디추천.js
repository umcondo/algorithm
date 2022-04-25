var answer = "";
// 1단계
answer = new_id.toLowerCase();
// 2단계 정규식
answer = answer.replace(/[^a-z0-9\-\_\.]/g, "");
// 3단계
answer = answer.replace(/\.{2,}/g, ".");
// 4단계
answer = answer.replace(/^\./, "");
answer = answer.replace(/\.$/, "");
// 5단계
answer = answer === "" ? (answer = "a") : answer;
// 6단계
answer = answer.slice(0, 15);

answer = answer.replace(/^\./, "");
answer = answer.replace(/\.$/, "");

// 7단계
while (answer.length < 3) {
  answer += answer[answer.length - 1];
}
