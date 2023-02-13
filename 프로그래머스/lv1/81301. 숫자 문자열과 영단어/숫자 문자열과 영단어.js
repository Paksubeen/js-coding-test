function solution(s) {
  let answer = 0;
  const arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  arr.forEach((num, i) => {
    s = s.split(num).join(i);
  });

  answer = Number(s);

  return answer;
}