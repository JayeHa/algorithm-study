/**
 * 최솟값 찾기 (메모리 초과 ⚠️ )
 * https://www.acmicpc.net/problem/11003
 *
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

console.log(solution(input));

function solution(input) {
  const [N, L] = input[0].split(" ").map(Number);
  const A = input[1].split(" ").map(Number);
  const resultList = [];
  let deque = [];

  for (let i = 0; i < N; i++) {
    const node = { index: i, value: A[i] };

    // 1. 값 비교
    if (deque.length > 0) {
      deque = deque.filter(({ value }) => value < node.value);
    }
    deque.push(node);

    // 2. 인덱스 비교
    deque = deque.filter(({ index }) => index > node.index - L);

    // 3. 결과 저장
    resultList.push(deque[0].value);
  }

  return resultList.join(" ");
}
