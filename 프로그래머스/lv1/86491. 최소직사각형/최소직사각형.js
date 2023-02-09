function solution(sizes) {
  let answer = 0;
  let w = 0;
  let h = 0;
  const arr = sizes.map(([w, h]) => (w > h ? [w, h] : [h, w]));

  for (let i = 0; i < arr.length; i++) {
    if (w < arr[i][0]) w = arr[i][0];
    if (h < arr[i][1]) h = arr[i][1];
  }

  answer = w * h;

  return answer;
}