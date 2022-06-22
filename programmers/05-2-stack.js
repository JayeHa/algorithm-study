{
  // 📌 정답
  function solution(s) {
    let count = 0;

    for (const v of s) {
      if (v === "(") {
        count += 1;
      } else {
        if (!count) return false;
        count -= 1;
      }
    }

    return count === 0;
  }

  console.log(solution("(())()"));
  console.log(solution(")()("));
  console.log(solution("()(()))(()"));

  // 📌 정답
  // function solution(s) {
  //   const stack = [];

  //   for (const v of s) {
  //     if (v === "(") {
  //       stack.push(v);
  //     } else {
  //       if (!stack.length) return false;
  //       stack.pop();
  //     }
  //   }

  //   return stack.length === 0;
  // }

  // 📌 2번째 시도: 굳이 문자열을 array로 바꿀 필요가 없었다.
  // function solution(s) {
  //   const arr = Array.from(s);

  //   const stack = [];

  //   for (const v of arr) {
  //     if (v === "(") {
  //       stack.push("(");
  //     } else {
  //       if (!stack.length) return false;
  //       stack.pop();
  //     }
  //   }

  //   if (!stack.length) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // 📌 1번째 시도 : 방향을 잘 못 잡아서 Stack을 사용하지 않았다.
  // function solution(s) {
  //   const arr = Array.from(s);

  //   if (arr[arr.length - 1] !== ")" || arr[0] !== "(") {
  //     return false;
  //   }

  //   let left = 0;
  //   let right = 0;

  //   let i = 0;

  //   while (arr.length) {
  //     arr.pop() === ")" ? right++ : left++;
  //     if (left > right) return false;
  //     i++;
  //   }

  //   if (left !== right) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }
}
