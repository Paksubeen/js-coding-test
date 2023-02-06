function solution(s) {
  let answer = "";
  let index = s.length / 2;

  if (s.length % 2 === 0) {
    answer = s.slice(index - 1, index + 1);
  } else {
    answer = s.charAt(index);
  }

  return answer;
}