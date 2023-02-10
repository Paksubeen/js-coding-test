function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    let map1 = Number(arr1[i].toString(2));
    let map2 = Number(arr2[i].toString(2));

    let str = "";
    let result = map1 + map2;
    let arr = result.toString().padStart(n, 0).split("");

    for (let i of arr) {
      if (i === "0") {
        str += " ";
      } else {
        str += "#";
      }
    }

    answer.push(str);
  }

  return answer;
}