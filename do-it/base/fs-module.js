// https://www.jdoodle.com/execute-nodejs-online/

/**
 * 한 단어 입력
 */
{
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split();
}

/**
 * 한 줄 입력
 */

{
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split();

  let [A, B] = input.map((num) => Number(num));
  console.log(A + B);
}

/**
 * 여러 줄 입력
 */
{
  input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  for (let i = 1; i < input.length; i++) {
    let [A, B] = input[i].split(" ");
    console.log(Number(A) + Number(B));
  }
}
