/**
 * Insertion Sort Pseudocode
 *
 * Start by picking the second element in the array
 * Now compare the second element with the one before it and swap if necessary.
 * Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
 * Repeat until the array is sorted.
 */

{
  function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0 && arr[j] > arr[i]; j--) {
        if (arr[j] > arr[i]) {
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }
      }
    }

    return arr;
  }

  // console.log(insertionSort([2, 1, 9, 76, 4]));
}

{
  function insertionSort(arr) {
    var currentVal;
    for (var i = 1; i < arr.length; i++) {
      currentVal = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
    }
    return arr;
  }

  // console.log(insertionSort([2, 1, 9, 76, 4]));
}
