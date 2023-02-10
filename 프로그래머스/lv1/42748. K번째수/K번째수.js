function solution(array, commands) {
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    let cmd = commands[i];
    let arr = array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b);
    answer.push(arr[cmd[2] - 1]);
  }

  return answer;
}