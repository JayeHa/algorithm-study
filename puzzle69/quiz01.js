//๐ ๋ด ๋ต
function findWinnerCase(all=4){
  let result = 0;

  for(let i=0; i<=all; i++){
    for(let j=0; i+j<=all; j++){
      let k = all - i - j;
      const arr = [i, j, k];
      // console.log(`โ๐ป=${i}, โ๐ป=${j}, โ๐ป=${k}`);
      arr.sort((a, b) => b - a);
      if(arr[0] != arr[1]) result++;
    }
  }
  return result;
}
// console.log(findWinnerCase(100));


//๐ ํ์ด1
{
  N = 100;

  var cnt = 0;
  for (var rock = 0; rock <= N; rock++){ // ๋ฐ์๋ฅผ ๋ธ ์ฌ๋์ ์
    for (var scissors = 0; scissors <= N - rock; scissors++){
      // ๊ฐ์๋ฅผ ๋ธ ์ฌ๋ ์
      var paper = N - rock - scissors; // ๋ณด๋ฅผ ๋ธ ์ฌ๋ ์
      if (rock > scissors){
        if(rock != paper)
          cnt++; // rock์ด ๊ฐ์ฅ ํฐ ๊ฒฝ์ฐ
      } else if (rock < scissors) {
        if(scissors != paper)
        cnt++;  // scissors๊ฐ ๊ฐ์ฅ ํฐ ๊ฒฝ์ฐ
      } else {
        if (rock < paper)
        cnt++; // paper๊ฐ ๊ฐ์ฅ ํฐ ๊ฒฝ์ฐ
      }
    }
  }
  // console.log(cnt);
}

//๐ ํ์ด2
{
  N = 4;

  var cnt = 0;
  for(l = 0; l <= N; l++){      // ์ผ์ชฝ ๋ถํ  ์์น
    for (r = l; r <= N; r++){   // ์ค๋ฅธ์ชฝ ๋ถํ  ์์น
      // console.log(`โ๐ป=${l}, โ๐ป=${r-1}, โ๐ป=${N-r}`); // โ๐ป=์ฒซ๋ฒ์งธ l๊น์ง, โ๐ป=2๋ฒ์ง r๊น์ง, โ๐ป=๋จ์๊ฒ

      if(l > r - 1){            // ๋ฐ์๊ฐ ๊ฐ์๋ณด๋ค ๋ง์ ๊ฒฝ์ฐ
        if(l != N - r)          // ๋ฐ์๊ฐ ๋ณด์ ๋ค๋ฅผ ๊ฒฝ์ฐ
          cnt++;
      } else if (l < r - 1){    // ๊ฐ์๊ฐ ๋ฐ์๋ณด๋ค ๋ง์ ๊ฒฝ์ฐ
        if (r - 1 != N - r)     // ๊ฐ์์ ๋ณด๊ฐ ๋ค๋ฅผ ๊ฒฝ์ฐ
        cnt++;
      } else {                  // ๋ฐ์์ ๊ฐ์๊ฐ ๊ฐ์ ๊ฒฝ์ฐ
        if(l < N - r)           // ๋ณด๊ฐ ์ต๋์ผ ๊ฒฝ์ฐ
        cnt++;
      }
    }
  }
  // console.log(cnt);
}