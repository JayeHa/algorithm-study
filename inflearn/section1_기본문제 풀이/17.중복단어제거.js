//1. 내 답변
{
  function solution(arr) {
    return [...new Set(arr)];
  }

  const arr = ["good", "time", "good", "time", "student"];
  console.log(solution(arr));
}

// 정답
{
  function solution(s) {
    let answer;
    //console.log(s.indexOf("student"));
    answer = s.filter((v, i) => {
      //console.log(v, i);
      if (s.indexOf(v) === i) return v;
    });

    return answer;
  }
  let str = ["good", "time", "good", "time", "student"];
  console.log(solution(str));
}
