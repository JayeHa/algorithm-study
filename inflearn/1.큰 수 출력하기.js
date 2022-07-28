//1. 내 답변
{
  function solution(arr) {
    const answer = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        answer.push(arr[i]);
      } else {
        arr[i] > arr[i - 1] && answer.push(arr[i]);
      }
    }
    return answer;
  }

  const arr = [7, 3, 9, 5, 6, 12];
  console.log(solution(arr));
}

// 정답
{
  function solution(arr) {
    let answer = [];
    answer.push(arr[0]); // ✔️ 반복문 진입 전에 push
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) answer.push(arr[i]);
    }
    return answer;
  }

  let arr = [7, 3, 9, 5, 6, 12];
  console.log(solution(arr));
}
