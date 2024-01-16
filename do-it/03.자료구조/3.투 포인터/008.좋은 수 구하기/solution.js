/**
 * 주몽
 * https://www.acmicpc.net/problem/1253
 *
 * N개의 수 중에서 어떤 수가 다른 수 두 개의 합으로 나타낼 수 있다면 그 수를 “좋다(GOOD)”고 한다.
 * N개의 수가 주어지면 그 중에서 좋은 수의 개수는 몇 개인지 출력하라.
 * 수의 위치가 다르면 값이 같아도 다른 수이다.
 *
 * 입력:
 * 첫째 줄에는 수의 개수 N(1 ≤ N ≤ 2,000), 두 번째 줄에는 i번째 수를 나타내는 Ai가 N개 주어진다. (|Ai| ≤ 1,000,000,000, Ai는 정수)
 * 10
 * 1 2 3 4 5 6 7 8 9 10
 *
 * 출력:
 * 좋은 수의 개수를 첫 번째 줄에 출력한다.
 * 8
 *
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

solution2(input);

function solution(input) {
  const [N, arrString] = input;

  let result = 0;
  const numCount = +N;
  const arr = arrString
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  for (let k = 0; k < numCount; k++) {
    const target = arr[k];
    let i = 0;
    let j = numCount - 1;

    while (i < j) {
      const sum = arr[i] + arr[j];

      if (sum === target) {
        if (i !== k && j !== k) {
          result++;
          break;
        } else if (i === k) {
          i++;
        } else if (j === k) {
          j--;
        }
      }

      if (sum > target) {
        j--;
      }

      if (sum < target) {
        i++;
      }
    }
  }

  console.log(result);
}

// 자기자신을 아예 빼버리는 경우
function solution2(input) {
  let result = 0;
  const N = +input[0];
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  for (let k = 0; k < N; k++) {
    const newArr = [...arr.slice(0, k), ...arr.slice(k + 1)];
    const target = arr[k];
    let i = 0;
    let j = N - 2;

    while (i < j) {
      const sum = newArr[i] + newArr[j];

      if (sum === target) {
        result++;
        break;
      }

      if (sum > target) {
        j--;
      }

      if (sum < target) {
        i++;
      }
    }
  }

  console.log(result);
}
