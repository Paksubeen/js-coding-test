function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      code += n;
      if (code > 90) {
        code -= 26;
      }
    }
    if (code >= 97 && code <= 122) {
      code += n;
      if (code > 122) {
        code -= 26;
      }
    }

    answer += String.fromCharCode(code);
  }

  return answer;
}