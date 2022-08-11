/**
 * Pseudocode
  Loop over the longer string
  Loop over the shorter string
  If the characters don't match, break out of the inner loop
  If the characters do match, keep going
  If you complete the inner loop and find a match, increment the count of matches
  Return the count
 */

{
  function naiveStringSearch(str1, str2) {
    // 👉 파라미터 이름 long과 short로 변경
    let count = 0;

    for (let i = 0; i < str1.length; i++) {
      let tempI = i;
      for (let j = 0; j < str2.length; j++) {
        if (str1[tempI] !== str2[j]) {
          // 👉 i + j를 하면 한 줄로 끝낼 수 있다.
          tempI = i;
          break;
        }
        if (j === str2.length - 1) count++;
        tempI++;
      }
    }

    return count;
  }

  console.log(naiveStringSearch("wowomgzomg", "omg"));
}

// 정답 ✨
{
  function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
      for (var j = 0; j < short.length; j++) {
        if (short[j] !== long[i + j]) break;
        if (j === short.length - 1) count++;
      }
    }
    return count;
  }

  console.log(naiveSearch("lorie loled", "lol"));
  /**
   i: 0 1 2 | 1 | 2 | ... | 6 7 8 | 7 | ...
   j: 0 1 2 | 0 | 0 | ... | 0 1 2 | 0 | ...
   */
}

// KNP 문자열 검색 강의에서 만나요.
// 압도적인 피드백 덕분에 저는 지금 KNP 문자열 검색 동영상을 다시 작업하고 있습니다 :)
