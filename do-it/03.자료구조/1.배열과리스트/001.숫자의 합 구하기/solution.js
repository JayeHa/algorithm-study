/**
 * 숫자의 합
 * https://www.acmicpc.net/problem/11720
 *
 * N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
 *
 */

input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

solution3({ count: input[0], numString: input[1] });

// for문 사용
function solution1({ count, numString }) {
  let answer = 0;

  for (let i = 0; i < count; i++) {
    answer += parseInt(numString[i], 10);
  }

  console.log(answer);
}

// arr 사용 ✅
function solution2({ count, numString }) {
  const answer = numString
    .split("")
    .map((char) => Number(char))
    .reduce((prev, curr) => prev + curr, 0);

  console.log(answer);
}

// arr 사용 (답지)
function solution3({ count, numString }) {
  let answer = 0;
  const arr = numString.split("");

  for (const i in arr) {
    answer += +arr[i];
  }

  console.log(answer);
}
