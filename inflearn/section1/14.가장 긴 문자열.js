//1. 내 답변
{
  function solution(arr) {
    return arr
      .map((value) => ({ value, len: value.toString().length }))
      .sort((a, b) => b.len - a.len)[0].value;
  }

  const arr = [5, "teacher", "time", "student", "beautiful", "good"];
  console.log(solution(arr));
}

// 정답
{
  function solution(s) {
    let answer = "",
      max = Number.MIN_SAFE_INTEGER;
    for (let x of s) {
      if (x.length > max) {
        max = x.length;
        answer = x;
      }
    }
    return answer;
  }
  let str = ["teacher", "time", "student", "beautiful", "good"];
  console.log(solution(str));
}
