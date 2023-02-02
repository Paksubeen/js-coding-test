function solution(n) {
  let answer = 0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n === i ** 2) {
      answer = (i + 1) ** 2;
    } else {
      answer = -1;
    }
  }

  return answer;
}