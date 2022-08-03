// 📌 reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
{
  function reverse(text) {
    const arr = [];

    function helper(helperInput) {
      if (!helperInput) return;
      arr.push(helperInput.slice(-1));
      return helper(helperInput.slice(0, -1));
    }

    helper(text);

    return arr.join("");
  }

  // console.log(reverse("awesome")); // 'emosewa'
  // console.log(reverse("rithmschool")); // 'loohcsmhtir'
}

// 솔루션 보고 난 뒤에 다시 푼 답
{
  function reverse(text) {
    if (!text) return "";
    return text.slice(-1) + reverse(text.slice(0, -1));
  }

  // console.log(reverse("awesome")); // 'emosewa'
  // console.log(reverse("rithmschool")); // 'loohcsmhtir'
}

// Reverse 솔루션 ✨
{
  function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
  }
}

// 📌 isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.
{
  function isPalindrome(text) {
    if (text.length === 1) return true;

    const char1 = text.slice(0, 1);
    const char2 = text.slice(-1);
    if (char1 !== char2) return false;
    if (text.length === 2) return true;

    const temp = text.slice(1, -1);
    return isPalindrome(temp);
  }

  // console.log(isPalindrome("awesome")); // false
  // console.log(isPalindrome("foobar")); // false
  // console.log(isPalindrome("tacocat")); // true
  // console.log(isPalindrome("amanaplanacanalpanama")); // true
  // console.log(isPalindrome("amanaplanacanalpandemonium")); // false
}

//isPalindrome 솔루션 ✨
{
  function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
  }
}

// 📌 someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback.
// The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
{
  // SAMPLE INPUT / OUTPUT
  const isOdd = (val) => val % 2 !== 0;

  function someRecursive(arr, callback) {
    if (arr.length === 0) return false;
    if (callback(arr.pop())) return true;
    return someRecursive(arr, callback);
  }

  // console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
  // console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
  // console.log(someRecursive([4, 6, 8], isOdd)); // false
  // console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
}

// someRecursive 솔루션 ✨
{
  function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
  }
}

// 📌 flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// 솔루션 보고 난 뒤에 다시 푼 답
{
  function flatten(arr) {
    let newArr = [];

    for (element of arr) {
      if (Array.isArray(element)) {
        newArr = newArr.concat(flatten(element));
      } else {
        newArr.push(element);
      }
    }

    return newArr;
  }

  // console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
  // console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
  // console.log(flatten([[1], [2], [3]])); // [1,2,3]
  // console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
}

// flatten 솔루션 ✨
{
  function flatten(oldArr) {
    var newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
      if (Array.isArray(oldArr[i])) {
        newArr = newArr.concat(flatten(oldArr[i]));
      } else {
        newArr.push(oldArr[i]);
      }
    }
    return newArr;
  }

  // console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
  // console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
  // console.log(flatten([[1], [2], [3]])); // [1,2,3]
  // console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
}
