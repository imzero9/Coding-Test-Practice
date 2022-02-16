function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    let eachCommand = commands[i];
    // slice한 뒤 오름차순 정렬
    let finalArray = array.slice(eachCommand[0] - 1, eachCommand[1]).sort();
    // k번째 수 구하기
    let answer = finalArray[eachCommand[2] - 1];
    // result array에 하나씩 추가하기
    result.push(answer);
  }
  return result;
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
