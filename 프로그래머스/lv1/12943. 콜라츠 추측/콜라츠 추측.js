function solution(num) {
  let answer = 0;
  let count = 0;

  function make1(num) {
    if (num === 1) return count;
    if (count === 500) return -1;

    if (num % 2 === 0) num = num / 2;
    else num = num * 3 + 1;

    count++;

    return make1(num);
  }

  answer = make1(num);

  return answer;
}