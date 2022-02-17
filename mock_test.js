function solution(answers) {
  let answer = [];
  const student1 = [1, 2, 3, 4, 5]; //5
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === student1[i % student1.length]) count[0]++;
    if (answers[i] === student2[i % student2.length]) count[1]++;
    if (answers[i] === student3[i % student2.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (count[i] === max) answers.push(i + 1);
  }

  return answer;
}
