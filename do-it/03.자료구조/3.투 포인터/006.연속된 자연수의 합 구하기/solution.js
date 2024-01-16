/**
 * 연속된 자연수의 합 구하기
 * https://www.acmicpc.net/problem/2018
 *
 * 어떠한 자연수 N은, 몇 개의 연속된 자연수의 합으로 나타낼 수 있다. 당신은 어떤 자연수 N(1 ≤ N ≤ 10,000,000)에 대해서, 이 N을 몇 개의 연속된 자연수의 합으로 나타내는 가지수를 알고 싶어한다. 이때, 사용하는 자연수는 N이하여야 한다.
 * 예를 들어, 15를 나타내는 방법은 15, 7+8, 4+5+6, 1+2+3+4+5의 4가지가 있다. 반면에 10을 나타내는 방법은 10, 1+2+3+4의 2가지가 있다.
 * N을 입력받아 가지수를 출력하는 프로그램을 작성하시오.
 *
 * 입력: 첫 줄에 정수 N이 주어진다.
 * 출력: 입력된 자연수 N을 몇 개의 연속된 자연수의 합으로 나타내는 가지수를 출력하시오
 *
 * 15(입력) -> 4(출력)
 */
const input = require("fs").readFileSync("input.txt").toString().trim().split();
solution2(+input);

function solution(input) {
  let result = 1;

  for (let i = 1; i <= input; i++) {
    let sum = i;

    for (let j = i + 1; sum <= input; j++) {
      sum = sum + j;

      if (sum === input) {
        result++;
      }
    }
  }

  console.log(result);
}

function solution2(input) {
  let count = 1;
  let startIndex = 1;
  let endIndex = 1;
  let sum = 1;

  while (endIndex !== input) {
    if (sum === input) {
      count++;
      endIndex++;
      sum += endIndex;
    }

    if (sum > input) {
      sum -= startIndex;
      startIndex++;
    }

    if (sum < input) {
      endIndex++;
      sum += endIndex;
    }
  }

  console.log(count);
}
