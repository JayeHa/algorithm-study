// 📌 AN EXAMPLE
// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// NAIVE SOLUTION
{
  function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return [arr[i], arr[j]];
        }
      }
    }
  }

  sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
  sumZero([-2, 0, 1, 3]); // undefined
  sumZero([1, 2, 3]); // undefined
}

// REFACTOR
{
  function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum === 0) {
        return [arr[left], arr[right]];
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
}

// 📌 Multiple Pointers - countUniqueValues
// 내 답변
{
  function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    let j = 0;

    for (j; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        arr[++i] = arr[j];
      }
    }

    return i + 1;
  }

  countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
  countUniqueValues([]); // 0
  countUniqueValues([-2, -1, -1, 0, 1]); // 4
}

// 정답
{
  function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  }
  countUniqueValues([1, 2, 2, 5, 7, 7, 99]);
}

// 📌 SLIDING WINDOW
// A naive solution
{
  function maxSubarraySum(arr, num) {
    if (num > arr.length) {
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
      temp = 0;
      for (let j = 0; j < num; j++) {
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

// Refactor
{
  function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
}

// 📌 Frequency Counter / Multiple Pointers - areThereDuplicates
// ⚠️ 정렬했어야...
{
  function areThereDuplicates(...args) {
    let i = 0;
    let j;
    for (j = i + 1; j < args.length; j++) {
      if (args[i] !== args[j]) {
        args[++i] = args[j];
      } else {
        return true;
      }
    }
  }
  console.log(areThereDuplicates(1, 2, 3)); // false
  console.log(areThereDuplicates(1, 2, 2)); // true
  console.log(areThereDuplicates("a", "b", "c", "a")); // true
}

// 정답
{
  function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while (next < args.length) {
      if (args[start] === args[next]) {
        return true;
      }
      start++;
      next++;
    }
    return false;
  }
}

// One Liner 솔루션
{
  function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }
}
