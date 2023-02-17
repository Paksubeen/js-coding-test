function solution(answers) {
  const answer = [];
  const result = [0, 0, 0];

  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] === answers[i]) result[0]++;
    if (two[i % two.length] === answers[i]) result[1]++;
    if (three[i % three.length] === answers[i]) result[2]++;
  }

  let index = 0;
  const max = Math.max(...result);

  for (let i = 0; i < result.length; i++) {
    if (max === result[i]) {
      answer[index] = i + 1;
      index++;
    }
  }

  return answer;
}