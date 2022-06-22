// 객체 초기화
{
  const obj1 = new Object();
  const obj2 = {};
  const obj3 = { name: "이선협", company: "Cobalt. Inc." };
  console.log(obj1);
  console.log(obj2);
  console.log(obj3);
}

// 객체의 요소 추가/삭제
{
  const obj = { name: "이선협", company: "Cobalt. Inc." };
  obj["email"] = "kciter@naver.com";
  obj.phone = "01012345678";
  console.log(obj);

  delete obj.phone;
  console.log(obj);
}

console.clear();

// in
{
  const obj = { name: "이선협", company: "Cobalt. Inc." };
  obj["email"] = "kciter@naver.com";

  // in
  console.log("email" in obj);
  console.log("phone" in obj);

  console.log(Object.keys(obj));
  console.log(Object.values(obj));

  // for in
  for (const key in obj) {
    console.log(key, obj[key]);
  }
}
