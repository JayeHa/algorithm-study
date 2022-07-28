//1. 내 답변
{
  function solution(str) {
    let answer = "";

    for (s of str) {
      const num = s.charCodeAt();
      if (num >= 65 && num <= 90) {
        answer += String.fromCharCode(num + 32);
      } else if (num >= 97 && num <= 122) {
        answer += String.fromCharCode(num - 32);
      }
    }

    return answer;
  }

  let str = "StuDY";
  console.log(solution(str));
}

// 2. 정답
{
  function solution(s) {
    let answer = "";
    for (let x of s) {
      if (x === x.toUpperCase()) answer += x.toLowerCase();
      else answer += x.toUpperCase();
    }
    return answer;
  }

  console.log(solution("StuDY"));
}
