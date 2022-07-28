//1. 내 답변
{
  // 삼각형의 결정조건
  // 세 변의 길이를 줬을 때 길이가 가장 긴 변의 길이는 다른 두 변 길이의 합보다 작아야 삼각형을 그릴 수 있어요.
  function solution(a, b, c) {
    const arr = [a, b, c].sort((a, b) => b - a);
    return arr[0] < arr[1] + arr[2] ? "YES" : "NO";
  }

  console.log(solution(6, 7, 11));
  console.log(solution(13, 33, 17));
}

// 2. 정답
{
  function solution(a, b, c) {
    let answer = "YES",
      max;
    let tot = a + b + c;
    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;
    if (tot - max <= max) answer = "NO";
    return answer;
  }

  console.log(solution(13, 33, 17));
}
