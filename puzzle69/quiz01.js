//📍 내 답
function findWinnerCase(all=4){
  let result = 0;

  for(let i=0; i<=all; i++){
    for(let j=0; i+j<=all; j++){
      let k = all - i - j;
      const arr = [i, j, k];
      // console.log(`✊🏻=${i}, ✌🏻=${j}, ✋🏻=${k}`);
      arr.sort((a, b) => b - a);
      if(arr[0] != arr[1]) result++;
    }
  }
  return result;
}
// console.log(findWinnerCase(100));


//📍 풀이1
{
  N = 100;

  var cnt = 0;
  for (var rock = 0; rock <= N; rock++){ // 바위를 낸 사람의 수
    for (var scissors = 0; scissors <= N - rock; scissors++){
      // 가위를 낸 사람 수
      var paper = N - rock - scissors; // 보를 낸 사람 수
      if (rock > scissors){
        if(rock != paper)
          cnt++; // rock이 가장 큰 경우
      } else if (rock < scissors) {
        if(scissors != paper)
        cnt++;  // scissors가 가장 큰 경우
      } else {
        if (rock < paper)
        cnt++; // paper가 가장 큰 경우
      }
    }
  }
  // console.log(cnt);
}

//📍 풀이2
{
  N = 4;

  var cnt = 0;
  for(l = 0; l <= N; l++){      // 왼쪽 분할 위치
    for (r = l; r <= N; r++){   // 오른쪽 분할 위치
      // console.log(`✊🏻=${l}, ✌🏻=${r-1}, ✋🏻=${N-r}`); // ✊🏻=첫번째 l까지, ✌🏻=2번짜 r까지, ✋🏻=남은것

      if(l > r - 1){            // 바위가 가위보다 많을 경우
        if(l != N - r)          // 바위가 보와 다를 경우
          cnt++;
      } else if (l < r - 1){    // 가위가 바위보다 많을 경우
        if (r - 1 != N - r)     // 가위와 보가 다를 경우
        cnt++;
      } else {                  // 바위와 가위가 같을 경우
        if(l < N - r)           // 보가 최대일 경우
        cnt++;
      }
    }
  }
  // console.log(cnt);
}