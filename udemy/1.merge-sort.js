/**
 * 📌 Merging Arrays Pseudocode
 *
 * Create an empty array, take a look at the smallest values in each input array
 * While there are still values we haven't looked at...
 * If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
 * If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
 */
{
  function mergingArrays(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (result.length < arr1.length + arr2.length) {
      // 👉 반복문을 하나로 끝낼 생각하지말고 나눠서 차근차근 구현하는게 가독성에 더 좋다!
      if (arr1[i] < arr2[j] || !arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }

    return result;
  }

  // console.log(mergingArrays([1, 10, 50], [2, 14, 99, 100]));
}

// 정답
// Merges two already sorted arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
// merge([100, 200], [1, 2, 3, 5, 6]);

/**
 * 📌 mergeSort Pseudocode
 *
 * Break up the array into halves until you have arrays that are empty or have one element
 * Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
 * Once the array has been merged back together, return the merged (and sorted!) array
 */
{
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const halfLen = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, halfLen)), arr.slice(halfLen));
    // return mergeSort(merge(arr.slice(0, halfLen), arr.slice(halfLen)));
  }
  // console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
}

// 정답 ✨
{
  // Recrusive Merge Sort
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }

  // console.log(mergeSort([10, 24, 76, 73]));
}
