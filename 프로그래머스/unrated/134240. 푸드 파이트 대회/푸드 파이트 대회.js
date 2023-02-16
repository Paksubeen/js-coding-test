function solution(food) {
  let answer = "";
  let left = "";
  let right = "";

  for (let i = 1; i < food.length; i++) {
    let length = Math.floor(food[i] / 2);
    for (let j = 0; j < length; j++) {
      left += i;
    }
  }

  right = left.split("").reverse().join("");
  answer = left + "0" + right;

  return answer;
}