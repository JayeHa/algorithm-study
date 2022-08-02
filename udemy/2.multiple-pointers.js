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
// ⚠️ 정렬했어야...🥲
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
  // console.log(areThereDuplicates(1, 2, 3)); // false
  // console.log(areThereDuplicates(1, 2, 2)); // true
  // console.log(areThereDuplicates("a", "b", "c", "a")); // true
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

// 📌 Multiple Pointers - averagePair
// Write a function called averagePair.
// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.
{
  function averagePair(arr, target) {
    if (arr.length === 0) return false;

    let i = 0;
    let j = arr.length - 1;

    while (i !== j) {
      const average = arr[i] + arr[j] / 2;

      if (average === target) {
        return true;
      }

      average > target && j--;
      average < target && i++;
    }

    return false;
  }

  // console.log(averagePair([1, 2, 3], 2.5)); // true
  // console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
  // console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
  // console.log(averagePair([], 4)); // false
}

// averagePair 솔루션
{
  function averagePair(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      let avg = (arr[start] + arr[end]) / 2;
      if (avg === num) return true;
      else if (avg < num) start++;
      else end--;
    }
    return false;
  }
}

//📌 Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
{
  function isSubsequence(str1, str2) {
    if (str1 > str2) return false;

    let i = 0;
    let j = str1.length;
    const temp = str1 + str2;

    while (j < temp.length && i < str1.length) {
      if (temp[i] === temp[j]) {
        i++;
        j++;
      } else {
        j++;
      }
    }

    return i === str1.length ? true : false;
  }

  // console.log(isSubsequence("hello", "hello world")); // true
  // console.log(isSubsequence("sing", "sting")); // true
  // console.log(isSubsequence("abc", "abracadabra")); // true
  // console.log(isSubsequence("abc", "acb")); // false (order matters)
}

// isSubsequence 솔루션 - 반복 ✨
{
  function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }
}

// isSubsequence 솔루션 – O(1) 공간이 아닌 재귀 ✨
{
  function isSubsequence(str1, str2) {
    if (str1.length === 0) return true;
    if (str2.length === 0) return false;
    if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
    return isSubsequence(str1, str2.slice(1));
  }
}
