{
  // π μ λ΅
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

  // π μ λ΅
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

  // π 2λ²μ§Έ μλ: κ΅³μ΄ λ¬Έμμ΄μ arrayλ‘ λ°κΏ νμκ° μμλ€.
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

  // π 1λ²μ§Έ μλ : λ°©ν₯μ μ λͺ» μ‘μμ Stackμ μ¬μ©νμ§ μμλ€.
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
