function solution(lottos, win_nums) {
  let answer = [];
  const arr = [6, 6, 5, 4, 3, 2, 1];

  let min = lottos.filter((el) => win_nums.includes(el)).length;
  let zero = lottos.filter((el) => !el).length;
  let max = min + zero;

  answer = [arr[max], arr[min]];

  return answer;
}