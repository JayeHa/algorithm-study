//1. 내 답변
{
  function solution(arr) {
    const oddNums = arr.filter((v) => v % 2 !== 0).sort((a, b) => a - b);
    const sum = oddNums.reduce((prev, curr) => prev + curr);

    console.log(sum);
    console.log(oddNums[0]);
  }

  const arr = [12, 77, 38, 41, 53, 92, 85];
  solution(arr);
}

// 2. 정답
{
  function solution(arr) {
    let answer = [];
    let sum = 0,
      min = 1000;
    for (let x of arr) {
      if (x % 2 === 1) {
        sum += x;
        if (x < min) min = x;
      }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
  }

  arr = [12, 77, 38, 41, 53, 92, 85];
  console.log(solution(arr));
}
