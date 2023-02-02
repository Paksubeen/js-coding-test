function solution(s) {
  let answer = true;
  let str = s.toLowerCase();
  let cntP = 0;
  let cntY = 0;

  for (let i of str) {
    if (i === "p") cntP++;
    if (i === "y") cntY++;
  }

  if (cntP === cntY) answer = true;
  else answer = false;

  return answer;
}