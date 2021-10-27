//📍 내 답
function getTotalParttern(start, end){
  const TOTAL_STATION = 43;

  // 사이에 있는 역 개수(내선, 외선)
  const inner = Math.abs(start-end) - 1;
  const outer = TOTAL_STATION - inner - 2;

  // 내선 거듭제곱 + 외선 거듭제곱 - 중복
  return (2 ** inner) + (2 ** outer) - 1; // 💣
}

console.log(getTotalParttern(1, 17));


//📍 풀이
{
  N = 43;

  var a = 1;
  var b = 17;
  var n = Math.abs(a - b);

  console.log((1 << (n - 1)) + (1 << (N - n - 1)) - 1);
}
// ✨ 2의 제곱을 구할 때는 성능상의 이점으로 시프트 연산 사용✨
// '1 << 3'이라면 2진수 1을 왼쪽으로 3비트 시프트하라는 의미입니다.
// 1비트 왼쪽으로 시프트할 때마다 2배, 오른쪽으로 시프트할 때마다 1/2이 됩니다.
