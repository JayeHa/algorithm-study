//1. 내 답변
{
  function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
      answer += i;
    }
    return answer;
  }

  console.log(solution(6));
  console.log(solution(10));
}

// 2. 정답
{
  function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
      answer = answer + i;
    }

    return answer;
  }

  console.log(solution(10));
}
