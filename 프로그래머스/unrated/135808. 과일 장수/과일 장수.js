function solution(k, m, score) {
  let answer = 0;
  let length = Math.floor(score.length / m);

  score.sort((a, b) => b - a);

  for (let i = 1; i <= length; i++) {
    answer += score[m * i - 1] * m;
  }

  return answer;
}