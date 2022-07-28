//1. 내 답변
{
  function solution(day, arr) {
    return arr //
      .filter((v) => v % 10 === day % 10).length;
  }

  arr = [25, 23, 11, 47, 53, 17, 33];
  console.log(solution(3, arr));

  arr = [12, 20, 54, 30, 87, 91, 30];
  console.log(solution(0, arr));
}

// 2. 정답
{
  function solution(day, arr) {
    let answer = 0;
    for (let x of arr) {
      if (x % 10 == day) answer++;
    }

    return answer;
  }

  arr = [25, 23, 11, 47, 53, 17, 33];
  console.log(solution(3, arr));
}
