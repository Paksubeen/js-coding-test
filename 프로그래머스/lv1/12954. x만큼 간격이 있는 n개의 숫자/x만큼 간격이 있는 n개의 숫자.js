function solution(x, n) {
  const answer = [];
  let result = x;

  for (let i = 1; i <= n; i++) {
    answer.push(result);
    result += x;
  }

  return answer;
}