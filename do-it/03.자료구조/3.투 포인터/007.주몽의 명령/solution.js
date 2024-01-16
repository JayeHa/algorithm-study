/**
 * 주몽
 * https://www.acmicpc.net/problem/1940
 *
 * 주몽은 철기군을 양성하기 위한 프로젝트에 나섰다. 그래서 야철대장을 통해 철기군이 입을 갑옷을 만들게 하였다.
 * 야철대장은 주몽의 명에 따르기 위하여 연구에 착수하던 중 아래와 같은 사실을 발견하게 되었다.
 * 갑옷을 만드는 재료들은 각각 고유한 번호를 가지고 있다.
 *
 * 갑옷은 두 개의 재료로 만드는데 두 재료의 고유한 번호를 합쳐서 M(1 ≤ M ≤ 10,000,000)이 되면 갑옷이 만들어 지게 된다.
 * 야철대장은 자신이 만들고 있는 재료를 가지고 갑옷을 몇 개나 만들 수 있는지 궁금해졌다.
 * 이러한 궁금증을 풀어 주기 위하여 N(1 ≤ N ≤ 15,000) 개의 재료와 M이 주어졌을 때 몇 개의 갑옷을 만들 수 있는지를 구하는 프로그램을 작성하시오.
 *
 * 입력:
 * 첫째 줄에는 재료의 개수 N(1 ≤ N ≤ 15,000)이 주어진다. 그리고 두 번째 줄에는 갑옷을 만드는데 필요한 수 M(1 ≤ M ≤ 10,000,000) 주어진다. 그리고 마지막으로 셋째 줄에는 N개의 재료들이 가진 고유한 번호들이 공백을 사이에 두고 주어진다. 고유한 번호는 100,000보다 작거나 같은 자연수이다.
 * 6
 * 9
 * 2 7 4 1 5 3
 *
 * 출력:
 * 첫째 줄에 갑옷을 만들 수 있는 개수를 출력한다.
 * 2
 *
 */
let input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input);

function solution(input) {
  const [N, M, arrString] = input;

  const arr = arrString
    .split(" ")
    .map(Number)
    // 숫자 정렬:  JavaScript의 기본 sort() 메서드는 문자열로 변환 후 사전식으로 정렬합니다. 숫자 배열을 올바르게 정렬하려면 비교 함수를 제공해야 합니다.
    .sort((a, b) => a - b);

  let result = 0;
  const target = +M;

  let startIndex = 0;
  let endIndex = +N - 1;

  while (startIndex < endIndex) {
    const sum = arr[startIndex] + arr[endIndex];

    if (sum === target) {
      result++;

      // 양 쪽 포인터 모두 이동
      startIndex++;
      endIndex--;
    }

    if (sum < target) {
      startIndex++;
    }

    if (sum > target) {
      endIndex--;
    }
  }

  console.log(result);
}
