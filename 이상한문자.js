function solution(s) {
  return s
    .split(" ")
    .map((elm) =>
      [...elm]
        .map((elm, idx) => (idx % 2 ? elm.toLowerCase() : elm.toUpperCase()))
        .join("")
    )
    .join(" ");
}
