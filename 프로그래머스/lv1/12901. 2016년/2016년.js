function solution(a, b) {
  let answer = "";

  answer = new Date(2016, a - 1, b).toString().split(" ")[0].toUpperCase();

  return answer;
}