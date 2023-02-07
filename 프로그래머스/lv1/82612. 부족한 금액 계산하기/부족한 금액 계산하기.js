function solution(price, money, count) {
  let answer = 0;
  let total = 0;

  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  if (total < money) answer = 0;
  else answer = total - money;

  return answer;
}