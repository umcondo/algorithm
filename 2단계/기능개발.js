function solution(progresses, speeds) {
  const deploy = [];
  while (progresses.length > 0) {
    progresses = progresses.map((progress, idx) => progress + speeds[idx]);

    let deployCount = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      deployCount++;
    }
    if (deployCount) deploy.push(deployCount);
  }

  return deploy;
}

// O(n^2)로 구현
// O(n)으로 개선 필요
