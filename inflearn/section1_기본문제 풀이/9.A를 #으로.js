//1. 내 답변
{
  function solution(data) {
    return data.replaceAll("A", "#");
  }

  console.log(solution("BANANA"));
}

// 2. 정답
{
  function solution(s) {
    let answer = "";
    for (let x of s) {
      if (x == "A") answer += "#";
      else answer += x;
    }
    return answer;
  }

  let str = "BANANA";
  console.log(solution(str));
}

// 3. 정답
{
  function solution(s) {
    let answer = s;
    answer = answer.replace(/A/g, "#");
    return answer;
  }

  let str = "BANANA";
  console.log(solution(str));
}
