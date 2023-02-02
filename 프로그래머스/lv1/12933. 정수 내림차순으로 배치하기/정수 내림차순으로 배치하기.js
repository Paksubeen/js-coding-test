function solution(n) {
  let answer = 0;
  const arr = (n + "").split("");

  arr.sort((a, b) => b - a);
  answer = Number(arr.join(""));

  return answer;
}