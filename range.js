function solution(array, commands) {
  for (let i = 0; i < commands.length; i++) {
    let result = [];
    let start = commands[i][0];
    let end = commands[i][1];
    let k = commands[i][2];
    result = result.push(array.slice(start, end + 1).sort()[k + 1]);
    return result;
  }
}

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let eachCommand = commands[i];
    let slice = array.slice(eachCommand[0] - 1, eachCommand[1]);
    answer.push(slice.sort((a, b) => a - b)[eachCommand[2] - 1]);
  }

  return answer;
}
