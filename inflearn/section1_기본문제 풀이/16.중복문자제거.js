//1. 내 답변
{
  function solution(str) {
    return [...new Set(str)].join("");
  }

  console.log(solution("ksekkset"));
}

// 2. 정답
{
  function solution(s) {
    let answer = "";
    // console.log(s.indexOf("K"));
    for (let i = 0; i < s.length; i++) {
      // console.log(s[i], i, s.indexOf(s[i]));
      if (s.indexOf(s[i]) === i) answer += s[i];
    }
    return answer;
  }
  console.log(solution("ksekkset"));
}
