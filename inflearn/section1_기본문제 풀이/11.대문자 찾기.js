//1. 내 답변
{
  function solution(str) {
    return str.split(/[A-Z]/g).length - 1;
  }

  let str = "KoreaTimeGood";
  console.log(solution(str));
}

// 2. 정답
{
  function solution(s) {
    let answer = 0;
    for (let x of s) {
      //let num=x.charCodeAt();
      //if(num>=65 && num<=90) answer++;
      if (x === x.toUpperCase()) answer++;
    }

    return answer;
  }

  let str = "KoreaTimeGood";
  console.log(solution(str));
}
