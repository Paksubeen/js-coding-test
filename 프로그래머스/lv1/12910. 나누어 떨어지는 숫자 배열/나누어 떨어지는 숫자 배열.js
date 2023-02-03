function solution(arr, divisor) {
  const answer = [];

  for (let i of arr) {
    if (i % divisor === 0) {
      answer.push(i);
    }
  }

  if (answer.length === 0) {
    answer.push(-1);
  } else {
    answer.sort((a, b) => a - b);
  }

  return answer;
}