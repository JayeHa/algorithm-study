//1. 내 답변
{
  function solution(str) {
    const mid = Math.floor(str.length / 2);
    return str.length % 2 == 1
      ? str.slice(mid, mid + 1)
      : str.slice(mid - 1, mid + 1);
  }

  console.log(solution("study"));
  console.log(solution("good"));
}

// 2. 정답
{
  function solution(s) {
    let answer;
    let mid = Math.floor(s.length / 2);
    if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
    else answer = s.substring(mid - 1, mid + 1);
    //if(s.length%2===1) answer=s.substr(mid, 1);
    //else answer=s.substr(mid-1, 2);
    return answer;
  }
  console.log(solution("study"));
}
