function solution(dartResult) {
  let answer = 0;
  let arr = [];
  let num = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      num = dartResult[i];
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        num = 10;
        i++;
      } else {
        num = dartResult[i];
      }
    } else if (dartResult[i] === "S") {
      arr.push(num ** 1);
    } else if (dartResult[i] === "D") {
      arr.push(num ** 2);
    } else if (dartResult[i] === "T") {
      arr.push(num ** 3);
    } else if (dartResult[i] === "#") {
      arr[arr.length - 1] *= -1;
    } else if (dartResult[i] === "*") {
      arr[arr.length - 1] *= 2;
      arr[arr.length - 2] *= 2;
    }
  }

  answer = arr.reduce((acc, cur) => acc + cur);

  return answer;
}