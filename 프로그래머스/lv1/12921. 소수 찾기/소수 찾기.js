function isFrime(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    if (
      (i !== 2 && i % 2 === 0) ||
      (i !== 3 && i % 3 === 0) ||
      (i !== 5 && i % 5 === 0)
    ) {
      continue;
    }
    if (isFrime(i)) answer++;
  }

  return answer;
}