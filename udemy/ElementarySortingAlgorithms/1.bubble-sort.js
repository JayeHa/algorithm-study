/**
 * 📌 BubbleSort Pseudocode O(n^2)
 *
 * Start looping from with a variable called i the end of the array towards the beginning
 * Start an inner loop with a variable called j from the beginning until i - 1
 * If arr[j] is greater than arr[j+1], swap those two values!
 * Return the sorted array
 *
 */
{
  function bubbleSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        // console.log(arr, arr[j], arr[j + 1]);
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }

    return arr;
  }

  // console.log(bubbleSort([4, 7, 9, 11, 1, 3]));
}

// 정답 (👉 최적화되지 않은 버전) 🤔
{
  // UNOPTIMIZED VERSION OF BUBBLE SORT
  function bubbleSort(arr) {
    for (var i = arr.length; i > 0; i--) {
      for (var j = 0; j < i - 1; j++) {
        console.log(arr, arr[j], arr[j + 1]);
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
}

{
  // ES2015 Version
  function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
  }
  // bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
}

// 정답 (👉 최적화된 버전) ✨
// 거의 정렬된 배열인 경우, 한 번 완전히 정렬되었다고 판단되면
// noSwaps가 true가 되므로 바로 반복문에서 빠져 나오게 된다.
// 따라서 거의 정렬된 배열의 경우 O(n) 선형시간에 가까워진다.
{
  // Optimized BubbleSort with noSwaps
  function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
      noSwaps = true;
      for (var j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }

      if (noSwaps) break;
    }
    return arr;
  }

  // bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
}
