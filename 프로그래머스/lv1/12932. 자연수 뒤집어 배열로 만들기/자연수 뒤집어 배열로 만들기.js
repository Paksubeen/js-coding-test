function solution(n) {
  const answer = [];
  const arr = (n + "").split("").reverse();

  for (let i of arr) {
    answer.push(Number(i));
  }

  return answer;
}