/**
 * 구간 합 구하기 4 ⭐️
 * https://www.acmicpc.net/problem/11659
 *
 * 수 N개가 주어졌을 때, i번째 수부터 j번째 수까지 합을 구하는 프로그램을 작성하시오.
 *
 * 첫째 줄에 수의 개수 N과 합을 구해야 하는 횟수 M이 주어진다. 둘째 줄에는 N개의 수가 주어진다.
 * 수는 1,000보다 작거나 같은 자연수이다.
 * 셋째 줄부터 M개의 줄에는 합을 구해야 하는 구간 i와 j가 주어진다.
 *
 * 총 M개의 줄에 입력으로 주어진 i번째 수부터 j번째 수까지 합을 출력한다.
 */

/**
 * 예상 출력
12
9
1
 */
input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

solution2(input);

function solution([counts, n, ...sections]) {
  const nCount = counts[0];
  const sumCount = counts[2];
  const arr = n.split(" ").map(Number);
  const sectionList = sections.map((section) => section.split(" ").map(Number));

  const sumArr = [arr[0]];
  for (let i in arr) {
    if (i != 0) {
      sumArr.push(sumArr[i - 1] + arr[i]);
    }
  }

  const result = sectionList
    .map((section) => {
      const i = section[0] - 1;
      const j = section[1] - 1;

      if (i <= 0) {
        return sumArr[j];
      }

      return sumArr[j] - sumArr[i - 1];
    })
    .join("\n");

  console.log(result);
}

// 개선 ✨
function solution2([counts, numbersStr, ...sectionsStr]) {
  const numbers = numbersStr.split(" ").map(Number);
  const sections = sectionsStr.map((section) => section.split(" ").map(Number));
  const prefixSums = [0]; // 👉 0번째 index를 0으로 초기화

  for (let i = 0; i < numbers.length; i++) {
    prefixSums[i + 1] = prefixSums[i] + numbers[i];
  }

  const results = sections.map(([start, end]) => {
    return prefixSums[end] - prefixSums[start - 1];
  });

  console.log(results.join("\n"));
}
