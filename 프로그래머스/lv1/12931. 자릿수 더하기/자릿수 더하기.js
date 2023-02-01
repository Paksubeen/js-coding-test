function solution(n) {
  let answer = 0;
  let arr = (n + "").split("");

  for (let i of arr) {
    answer += Number(i);
  }

  return answer;
}