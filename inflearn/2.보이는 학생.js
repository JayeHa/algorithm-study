//1. 내 답변
{
  function solution(arr) {
    // 지금까지 나왔던 가장 큰 수를 담는 변수 선언
    // 보이는 학생 수 카운트 할 변수 선언
    let max = 0;
    let count = 0;

    // for문을 돌면서 가장 큰 수보다 클 경우 카운트함
    // 변수에 가장 큰 수 저장
    arr.forEach((v) => {
      if (max < v) {
        count++;
        max = v;
      }
    });

    // 카운트 리턴
    // 130 135 148 150 153 (5)
    return count;
  }

  const arr = [130, 135, 148, 140, 145, 150, 150, 153];
  console.log(solution(arr));
}

// 2.
{
  function solution(arr) {
    let answer = 1,
      max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        answer++;
        max = arr[i];
      }
    }
    return answer;
  }

  let arr = [130, 135, 148, 140, 145, 150, 150, 153];
  console.log(solution(arr));
}
