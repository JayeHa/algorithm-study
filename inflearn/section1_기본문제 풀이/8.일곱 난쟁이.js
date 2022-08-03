//1. 내 답변
{
  function solution(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);
    let result;

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (sum - (arr[i] + arr[j]) === 100) {
          result = arr.filter((v, index) => index !== i && index !== j);
        }
      }
    }

    return result;
  }

  arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
  console.log(solution(arr));
}

// 2. 정답
{
  function solution(arr) {
    let answer = arr;
    let sum = answer.reduce((a, b) => a + b, 0);
    for (let i = 0; i < 8; i++) {
      for (let j = i + 1; j < 9; j++) {
        if (sum - (answer[i] + answer[j]) == 100) {
          answer.splice(j, 1);
          answer.splice(i, 1);
        }
      }
    }
    return answer;
  }

  let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
  console.log(solution(arr));
}
