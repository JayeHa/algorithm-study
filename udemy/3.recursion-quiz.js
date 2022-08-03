// 📌 capitalizeFirst
// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.
{
  function capitalizeFirst(arr) {
    if (arr.length === 0) return [];
    const capitalizedWord = arr[0].replace(arr[0][0], arr[0][0].toUpperCase());
    return [capitalizedWord, ...capitalizeFirst(arr.slice(1))];
  }

  // console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
}

// capitalizeFire 솔루션
{
  function capitalizeFirst(array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string =
      array.slice(array.length - 1)[0][0].toUpperCase() +
      array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
  }
}

// 📌 nestedEvenSum
{
  const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup",
      },
    },
  };

  const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" },
  };

  function nestedEvenSum(obj) {
    let total = 0;

    for (key in obj) {
      if (typeof obj[key] === "object") {
        total += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        total += obj[key];
      }
    }
    return total;
  }

  // console.log(nestedEvenSum(obj1)); // 6
  // console.log(nestedEvenSum(obj2)); // 10
}

// nestedEvenSum 솔루션
{
  function nestedEvenSum(obj, sum = 0) {
    for (var key in obj) {
      if (typeof obj[key] === "object") {
        sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }
    return sum;
  }
}

// 📌 capitalizeWords
// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.
{
  function capitalizeWords(arr) {
    if (arr.length === 0) return [];
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
  }

  // console.log(capitalizeWords(["hi", "hello", "nice"]));
}

// capitalizeWords 솔루션
{
  function capitalizeWords(array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase());
    return res;
  }
}

// 📌 stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!
{
  const obj = {
    num: 1,
    test: [1, 2],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66,
      },
    },
  };
  /*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

  function stringifyNumbers(obj) {
    let newObj = {};

    for (key in obj) {
      if (typeof obj[key] === "number") {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === "object") {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }

    return newObj;
  }

  // console.log(stringifyNumbers(obj));
}

// stringifyNumbers 솔루션
{
  function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === "number") {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }
}

// 📌 collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
{
  const obj = {
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz",
            },
          },
        },
      },
    },
  };

  function collectStrings(obj) {
    const array = [];

    function helper(obj) {
      for (key in obj) {
        if (typeof obj[key] === "string") {
          array.push(obj[key]);
        } else if (typeof obj[key] === "object") {
          helper(obj[key]);
        }
      }
    }

    helper(obj);

    return array;
  }

  console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
}

// collectStrings 솔루션: Helper 메소드 재귀 버전
{
  function collectStrings(obj) {
    var stringsArr = [];

    function gatherStrings(o) {
      for (var key in o) {
        if (typeof o[key] === "string") {
          stringsArr.push(o[key]);
        } else if (typeof o[key] === "object") {
          return gatherStrings(o[key]);
        }
      }
    }

    gatherStrings(obj);

    return stringsArr;
  }
}

// collectStrings 솔루션: 순수 재귀 버전
{
  function collectStrings(obj) {
    var stringsArr = [];
    for (var key in obj) {
      if (typeof obj[key] === "string") {
        stringsArr.push(obj[key]);
      } else if (typeof obj[key] === "object") {
        stringsArr = stringsArr.concat(collectStrings(obj[key]));
      }
    }

    return stringsArr;
  }
}
