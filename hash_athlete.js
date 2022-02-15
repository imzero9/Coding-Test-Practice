function solution1(participant, completion) {
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] in completion) {
      continue;
    }
    return participant[i];
  }
}

function solution2(participant, completion) {
  //sort 함수로 알파벳순(오름차순) 정렬 -> 두 배열 대조 가능
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
