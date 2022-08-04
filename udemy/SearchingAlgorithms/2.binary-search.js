/**
 * 📌 Binary Search Exercise
Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it here
- https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
- https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
 */
{
  function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      const middle = Math.ceil((left + right) / 2);

      if (arr[middle] > val) {
        right = middle; // 👉 middle은 해당 값이 아니라는 것을 알기 때문에 포함할 필요가 없다. (middle + 1)
      } else if (arr[middle] < val) {
        left = middle; // 👉 middle - 1
      } else {
        return middle;
      }
    }

    return -1;
  }

  console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
  console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
  console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
  console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
}

// 정답 ✨
{
  // Original Solution
  function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
      if (elem < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === elem) {
      return middle;
    }
    return -1;
  }
}

{
  // Refactored Version
  function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
      if (elem < arr[middle]) end = middle - 1;
      else start = middle + 1;
      middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
  }
}
