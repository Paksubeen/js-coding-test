function solution(nums) {
  let answer = 0;
  const arr = [];
  let max = nums.length / 2;

  for (let i of nums) {
    if (arr.length < max) {
      if (!arr.includes(i)) {
        arr.push(i);
      }
    }
  }

  answer = arr.length;

  return answer;
}