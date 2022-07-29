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
