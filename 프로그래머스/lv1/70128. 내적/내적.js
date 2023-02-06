function solution(a, b) {
  let answer = 0;

  answer = a.reduce((acc, cur, idx) => {
    return (acc += cur * b[idx]);
  }, 0);

  return answer;
}