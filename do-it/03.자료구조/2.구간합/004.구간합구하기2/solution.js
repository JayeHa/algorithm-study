/**
 * 구간 합 구하기 5
 * https://www.acmicpc.net/problem/11660
 *
 * N×N개의 수가 N×N 크기의 표에 채워져 있다. (x1, y1)부터 (x2, y2)까지 합을 구하는 프로그램을 작성하시오.
 * (x, y)는 x행 y열을 의미한다.
 *
 * 첫째 줄에 표의 크기 N과 합을 구해야 하는 횟수 M이 주어진다. (1 ≤ N ≤ 1024, 1 ≤ M ≤ 100,000)
 * 둘째 줄부터 N개의 줄에는 표에 채워져 있는 수가 1행부터 차례대로 주어진다.
 * 다음 M개의 줄에는 네 개의 정수 x1, y1, x2, y2 가 주어지며, (x1, y1)부터 (x2, y2)의 합을 구해 출력해야 한다.
 * 표에 채워져 있는 수는 1,000보다 작거나 같은 자연수이다. (x1 ≤ x2, y1 ≤ y2)
 *
 * 총 M줄에 걸쳐 (x1, y1)부터 (x2, y2)까지 합을 구해 출력한다.
 */

/**
27
6
64
 */

input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

solution(input);
function solution([row1, ...rest]) {
  const [N, M] = row1.split(" ").map(Number);
  const coors = rest.slice(N, N + M).map((v) => v.split(" ").map(Number));
  const table = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  const sumTable = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

  // 원본 테이블 생성
  for (let i = 1; i <= N; i++) {
    const row = [0, ...rest[i - 1].split(" ").map(Number)];
    table[i] = row;
  }

  //   구간합 테이블 생성
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      sumTable[i][j] =
        sumTable[i][j - 1] +
        sumTable[i - 1][j] -
        sumTable[i - 1][j - 1] +
        table[i][j];
    }
  }

  // 결과 계산
  const result = [];
  for (let i = 0; i < M; i++) {
    const [x1, y1, x2, y2] = coors[i];

    const _result =
      sumTable[x2][y2] -
      sumTable[x1 - 1][y2] -
      sumTable[x2][y1 - 1] +
      sumTable[x1 - 1][y1 - 1];

    result.push(_result);
  }
  console.log(result.join("\n"));
}
