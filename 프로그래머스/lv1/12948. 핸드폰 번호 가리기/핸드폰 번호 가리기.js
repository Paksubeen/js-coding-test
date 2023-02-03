function solution(phone_number) {
  let answer = "";
  let length = phone_number.length - 4;
  let number = phone_number.slice(-4);

  for (let i = 1; i <= length; i++) {
    answer += "*";
  }
  answer += number;

  return answer;
}