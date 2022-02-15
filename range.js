function solution(array, commands) {
  let result = [];
  for (let a = 0; a < commands.length; a++) {
    let i = commands[a][a];
    let j = commands[a][a + 1];
    let k = commands[a][a + 2];
    result = result.push(array.slice(i, j + 1).sort()[k]);
    return result;
  }
}
