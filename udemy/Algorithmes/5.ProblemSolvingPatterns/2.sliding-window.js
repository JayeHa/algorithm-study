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

// 📌 Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array.
// In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
{
  function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;
    let sum = arr
      .filter((v, index) => index <= num - 1)
      .reduce((a, b) => a + b);
    let max = -Infinity;
    let i = 1;
    let j = i + num - 1;

    for (; j < arr.length; j++, i++) {
      sum = sum - arr[i - 1] + arr[j];
      if (sum > max) {
        max = sum;
      }
    }
    return max;
  }

  // console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
  // console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
  // console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
  // console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
  // console.log(maxSubarraySum([2, 3], 3)); // null
}

// 정답
{
  function maxSubarraySum(arr, num) {
    if (arr.length < num) return null;

    let total = 0;
    for (let i = 0; i < num; i++) {
      total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
      currentTotal += arr[i] - arr[i - num];
      total = Math.max(total, currentTotal);
    }
    return total;
  }
}

// // 📌 Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

{
  function minSubArrayLen(arr, num) {
    //
  }

  console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
  // console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
  // console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
  // console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
  // console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
  // console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
  // console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
}
