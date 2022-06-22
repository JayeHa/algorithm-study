// 📌 배열을 만드는 방법 ====================
{
  const arr1 = new Array();
  const arr2 = [];
  const arr3 = [1, 2, 3, 4, 5];
  const arr4 = new Array(5);

  // n개의 배열요소를 초기화
  const arr5 = new Array(5).fill(5);

  // index로 초기화 cf. [1,2,3,4,5]
  const arr6 = Array.from(Array(5), function (v, k) {
    return k + 1;
  });
}

console.clear();

// 배열의 length를 조작 💩 ====================
{
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(arr.length);
  arr.length = 3;
  arr.length = 10;
}

console.clear();

// 유용한 배열 함수들 (편의성 함수) ====================
{
  const arr = [1, 2, 3, 4, 5, 6];

  // join
  console.log(arr.join(", "));

  // reverse (기존 배열에 영향을 줌)
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

// 요소의 추가/삭제
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
  console.log(arr); // 원본은 변하지 않음
}

console.clear();

{
  const arr = [1, 2, 3, 4, 5, 6];

  // splice
  arr.splice(2, 2);
  console.log(arr);
}

console.clear();

// 배열의 순회 ====================
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

// 배열의 타입은 object다 ! ====================
{
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(typeof arr);

  // 배열을 이렇게 사용하는건 추천하지 않음 💩
  arr["key"] = "value";
  console.log(arr);
  console.log(arr.length); // 여전히 length가 6이 된다.
}
