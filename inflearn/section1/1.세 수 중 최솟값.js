// 1. 첫 답변
{
  function solution(a, b, c) {
    if (a > b) {
      if (b > c) {
        return c;
      }
      return b;
    }
    return a;
  }
}

// 2. 정답
{
  function solution(a, b, c) {
    let answer;
    if (a < b) answer = a;
    else answer = b;
    if (c < answer) answer = c;

    return answer;
  }

  console.log(solution(2, 5, 1));
}
