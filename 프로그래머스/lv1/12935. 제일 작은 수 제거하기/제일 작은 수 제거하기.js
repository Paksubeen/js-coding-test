function solution(arr) {
  const answer = [];
  let minNum = Math.min(...arr);

  if (arr.length === 1) {
    return [-1];
  }

  arr.filter((el) => {
    if (el !== minNum) {
      answer.push(el);
    }
  });

  return answer;
}