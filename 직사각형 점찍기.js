process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  // const result = [];
  for (let i = 0; i < b; i++) {
    // result.push('*'.repeat(a));
    console.log("*".repeat(a));
  }
  // console.log( result.join('\n'));
});
