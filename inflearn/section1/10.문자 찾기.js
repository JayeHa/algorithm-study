//1. 내 답변
{
  function solution(str, r) {
    let answer = 0;

    for (i of str) {
      i === r && answer++;
    }

    return answer;
  }

  let str = "COMPUTERPROGRAMMING";
  console.log(solution(str, "R"));
}

// 2. 정답
{
  function solution(s, t) {
    let answer = 0;
    for (let x of s) {
      if (x === t) answer++;
    }
    return answer;
  }

  let str = "COMPUTERPROGRAMMING";
  console.log(solution(str, "R"));
}

// 3. 정답
{
  function solution(s, t) {
    let answer = s.split(t).length;
    return answer - 1;
  }

  let str = "COMPUTERPROGRAMMING";
  console.log(solution(str, "R"));
}
