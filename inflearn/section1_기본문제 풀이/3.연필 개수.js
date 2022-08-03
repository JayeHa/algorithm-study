//1. 내 답변
{
  function solution(n) {
    return Math.ceil(n / 12);
  }

  console.log(solution(25));
  console.log(solution(178));
}

// 2. 정답
{
  function solution(n) {
    let answer;
    answer = Math.ceil(n / 12);
    return answer;
  }

  console.log(solution(178));
}
