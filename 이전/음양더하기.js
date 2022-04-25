for (let i = 0; i < absolutes.length; i++) {
  absolutes[i] = signs[i] === true ? absolutes[i] : -absolutes[i];
}
absolutes.reduce((acc, cur) => acc + cur, 0);
