function solution(s) {
  const answer = [];
  const str = [];

  for (let i = 0; i < s.length; i++) {
    if (str.includes(s[i])) {
      answer.push(str.length - str.lastIndexOf(s[i]));
      str.push(s[i]);
    } else {
      answer.push(-1);
      str.push(s[i]);
    }
  }

  return answer;
}