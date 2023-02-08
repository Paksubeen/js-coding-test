function solution(n) {
  let answer = 0;
  let number = n.toString(3).split("").reverse().join("");

  answer = parseInt(number, 3);

  return answer;
}