// ๐ ๋ฐฐ์ด์ ๋ง๋๋ ๋ฐฉ๋ฒ ====================
{
  const arr1 = new Array();
  const arr2 = [];
  const arr3 = [1, 2, 3, 4, 5];
  const arr4 = new Array(5);

  // n๊ฐ์ ๋ฐฐ์ด์์๋ฅผ ์ด๊ธฐํ
  const arr5 = new Array(5).fill(5);

  // index๋ก ์ด๊ธฐํ cf. [1,2,3,4,5]
  const arr6 = Array.from(Array(5), function (v, k) {
    return k + 1;
  });
}

console.clear();

// ๋ฐฐ์ด์ length๋ฅผ ์กฐ์ ๐ฉ ====================
{
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(arr.length);
  arr.length = 3;
  arr.length = 10;
}

console.clear();

// ์ ์ฉํ ๋ฐฐ์ด ํจ์๋ค (ํธ์์ฑ ํจ์) ====================
{
  const arr = [1, 2, 3, 4, 5, 6];

  // join
  console.log(arr.join(", "));

  // reverse (๊ธฐ์กด ๋ฐฐ์ด์ ์ํฅ์ ์ค)
  console.log(arr.reverse());
  console.log(arr);
}

{
  const arr1 = [1, 2, 3, 4, 5, 6];
  const arr2 = [7, 8, 9, 10];

  // concat
  console.log(arr1.concat(arr2));
}

console.clear();

// ์์์ ์ถ๊ฐ/์ญ์ 
{
  const arr = [1, 2, 3, 4, 5, 6];

  // push, pop
  arr.push(7);
  arr.push(7, 8, 9);
  console.log(arr);

  arr.pop(); // 9
  arr.pop(); // 8
  console.log(arr.pop()); // 7
  console.log(arr);
}

console.clear();

{
  const arr = [1, 2, 3, 4, 5, 6];

  // shift, unshift
  arr.shift();
  arr.shift();
  console.log(arr);
  arr.unshift(10);
  console.log(arr);
}

console.clear();

{
  const arr = [1, 2, 3, 4, 5, 6];

  // slice
  console.log(arr.slice(2, 4));
  console.log(arr); // ์๋ณธ์ ๋ณํ์ง ์์
}

console.clear();

{
  const arr = [1, 2, 3, 4, 5, 6];

  // splice
  arr.splice(2, 2);
  console.log(arr);
}

console.clear();

// ๋ฐฐ์ด์ ์ํ ====================
{
  const arr = [1, 2, 3, 4, 5, 6];

  // for (let i = 0; i < 6; i += 1) {
  //   console.log(arr[i]);
  // }

  // for of
  for (const item of arr) {
    console.log(item);
  }
}

console.clear();

// ๋ฐฐ์ด์ ํ์์ object๋ค ! ====================
{
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(typeof arr);

  // ๋ฐฐ์ด์ ์ด๋ ๊ฒ ์ฌ์ฉํ๋๊ฑด ์ถ์ฒํ์ง ์์ ๐ฉ
  arr["key"] = "value";
  console.log(arr);
  console.log(arr.length); // ์ฌ์ ํ length๊ฐ 6์ด ๋๋ค.
}
