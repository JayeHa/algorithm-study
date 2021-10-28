//📍 내 답
// TODO: 4, 9, 40, 90 ... | 5, 50, 500 ... 으로 나누는거 안함 🥲

function getRomeNum(num){
    let result = '';
    if(num >= 1000){
      const quotient = parseInt(num / 1000);
      switch(quotient){
        case 3: result = 'MMM'; break;
        case 2: result = 'MM'; break;
        case 1: result = 'M'; break;
      }
      result += getRomeNum(num % 1000);

    } else if(num >= 100){
      const quotient = parseInt(num / 100);
      switch(quotient){
        case 9: result = "CM"; break;
        case 8: result = "DCCC"; break;
        case 7: result = "DCC"; break;
        case 6: result = "DC"; break;
        case 5: result = "D"; break;
        case 4: result = "CD"; break;
        case 3: result = "CCC"; break;
        case 2: result = "CC"; break;
        case 1: result = "C"; break;
      }
      result += getRomeNum(num % 100);

    } else if(num >= 10){
      const quotient = parseInt(num / 10);
      switch(quotient){
        case 9: result = "XC"; break;
        case 8: result = "LXXX"; break;
        case 7: result = "LXX"; break;
        case 6: result = "LX"; break;
        case 5: result = "L"; break;
        case 4: result = "XL"; break;
        case 3: result = "XXX"; break;
        case 2: result = "XX"; break;
        case 1: result = "X"; break;
      }
      result += getRomeNum(num % 10);

    } else {
      switch(num){
        case 9: result = "IX"; break;
        case 8: result = "VIII"; break;
        case 7: result = "VII"; break;
        case 6: result = "VI"; break;
        case 5: result = "V"; break;
        case 4: result = "IV"; break;
        case 3: result = "III"; break;
        case 2: result = "II"; break;
        case 1: result = "I"; break;
      }
    }
    return result;
}

function getHowManyNum(romeNumLen){
  let result = 0;
  for(let i=1; i < 4000; i++){
    const romeNum = getRomeNum(i);
    result = romeNumLen == romeNum.length ? result + 1 : result;
  }
  return result;
}

console.log(getHowManyNum(1))

