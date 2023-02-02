function solution(s) {
  let answer = 0;

  if (s[0] === "-") {
    answer = s.slice(1) * -1;
  } else {
    answer = Number(s);
  }

  return answer;
}