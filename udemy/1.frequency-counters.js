// 📌 AN EXAMPLE
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// A NAIVE SOLUTION - Time Complexity: N^2 💩
{
  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      let correctIndex = arr2.indexOf(arr1[i] ** 2);
      if (correctIndex === -1) {
        return false;
      }
      arr2.splice(correctIndex, 1);
    }
    return true;
  }
}

// REFACTORED - Time Complexity: O(n) ✨
{
  function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of arr1) {
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
        return false;
      }
      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false;
      }
    }
    return true;
  }
}

// 📌 ANAGRAMS
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// 내가 한 풀이
{
  function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const strObj1 = {};
    const strObj2 = {};

    for (let char of str1) {
      char = char.toLowerCase();
      strObj1[char] = (strObj1[char] || 0) + 1;
    }

    for (let char of str2) {
      char = char.toLowerCase();
      strObj2[char] = (strObj2[char] || 0) + 1;
    }

    for (let char in strObj1) {
      if (!(char in strObj2)) return false; // 키 값을 서로 비교하고
      if (strObj1[char] !== strObj2[char]) return false; // 카운팅된 값을 서로 비교한다.
    }
    return true;
  }

  // console.log(validAnagram("", "")); // true
  // console.log(validAnagram("aaz", "zza")); // false
  // console.log(validAnagram("anagram", "nagaram")); // true
  // console.log(validAnagram("rat", "car")); // false
  // console.log(validAnagram("awesome", "awesom")); // false
  // console.log(validAnagram("qwerty", "qeywrt")); // true
  // console.log(validAnagram("texttwisttime", "timetwisttext")); // true
}

// 정답
{
  function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }
    console.log(lookup);

    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }

    return true;
  }

  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  // validAnagram("anagrams", "nagaramm");
}

// ❓ Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
{
  function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();

    // 길이가 같은지 확인
    if (str1.length !== str2.length) return false;

    // 숫자가 담긴 객체 만들기 - for문
    const lookup = {};

    for (let num of str1) {
      lookup[num] = lookup[num] + 1 || 1;
    }

    // 비교하기 - for문
    for (let num of str2) {
      if (!lookup[num]) {
        return false;
      } else {
        lookup[num] -= 1;
      }
    }

    return true;
  }

  console.log(sameFrequency(182, 281)); // true
  console.log(sameFrequency(34, 14)); // false
  console.log(sameFrequency(3589578, 5879385)); // true
  console.log(sameFrequency(22, 222)); // false
}
