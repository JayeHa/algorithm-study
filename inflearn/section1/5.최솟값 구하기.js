//1. 내 답변
{
  function solution(arr) {
    // arr.sort((a, b) => a - b);
    let min = arr[0];
    arr.forEach((e) => {
      min = min > e ? e : min;
    });
    return min;
  }

  const arr = [5, 3, 7, 11, 2, 15, 17];
  console.log(solution(arr));
}

// 2. 정답
{
  function solution(arr) {
    let answer,
      min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;
  }

  let arr = [5, 7, 1, 3, 2, 9, 11];
  console.log(solution(arr));
}
