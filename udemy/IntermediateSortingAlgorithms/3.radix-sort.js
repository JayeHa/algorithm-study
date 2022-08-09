/**
 * 📌 RADIX SORT HELPERS
 * In order to implement radix sort, it's helpful to build a few helper functions first:
 * 1) getDigit(num, place) - returns the digit in num at the given place value
 */
{
  // function getDigit(num, place) {
  //   return Number(num.toString().slice(-1 - place, -place));
  // }
  // console.log(getDigit(12345, 0)); // 5
  // console.log(getDigit(12345, 1)); // 4
  // console.log(getDigit(12345, 2)); // 3
  // console.log(getDigit(12345, 3)); // 2
  // console.log(getDigit(12345, 4)); // 1
  // console.log(getDigit(12345, 5)); // 0
  // console.log(getDigit(12345, 6)); // 0
}

// 정답
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * 2) digitCount(num) - returns the number of digits in num
 */
{
  // function digitCount(num) {
  //   return num.toString().length;
  // }
  // console.log(digitCount(1)); // 1
  // console.log(digitCount(25)); // 2
  // console.log(digitCount(314)); // 3
}

// 정답
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * 3) mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest numbers in the list
 */
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/**
 * RADIX SORT PSEUDOCODE
 * Define a function that accepts list of numbers
 * Figure out how many digits the largest number has
 * Loop from k = 0 up to this largest number of digits
 * For each iteration of the loop:
 *  - Create buckets for each digit (0 to 9)
 *  - place each number in the corresponding bucket based on its kth digit
 * Replace our existing array with values in our buckets, starting with 0 and going up to 9
 * return list at the end!
 */

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
// console.log(radixSort([100, -3, 6]));
