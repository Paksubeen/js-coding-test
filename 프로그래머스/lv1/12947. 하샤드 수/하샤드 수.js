function solution(x) {
  let sum = 0;
  const arr = (x + "").split("");

  for (let i of arr) {
    sum += Number(i);
  }

  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}