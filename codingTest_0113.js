function solution(my_strings, parts) {
  let result = '';
  parts.forEach(([s, e], i) => {
    result += my_strings[i].slice(s, e + 1);
  });
  return result;
}
/*====================================== */
function solution(my_string, n) {
  let result = my_string.split('').reverse();

  result = result.slice(0, n).reverse();

  return result.join('');
}
//

function solution(my_string, n) {
  return my_string.slice(-n);
}

//
function solution(my_string, n) {
  return my_string.substring(my_string.length - n); // 끝에서 부터 n까지지
}
//
function solution(my_string, n) {
  var answer = my_string.slice(-1 * n); //start가 음수이면 문자열의 끝에서부터 시작하는 인덱스를 의미
  return answer;
}
/*====================================== */
function solution(my_string) {
  let result = [];
  for (i = 0; i < my_string.length; i++) {
    result.push(my_string.slice(i));
  }
  result.sort();
  return result;
}
/*====================================== */
function solution(my_string, is_suffix) {
  let dic = [];
  let result = 0;
  for (i = 0; i < my_string.length; i++) {
    dic.push(my_string.slice(i));
  }
  dic.sort();

  return dic.includes(is_suffix) ? 1 : 0;
}
// str.endsWith(suff)는 문자열 str이 접미사 suff로 끝나는지를 확인
const solution = (str, suff) => (str.endsWith(suff) ? 1 : 0);
//endsWith 대체구현
const solution = (str, suff) => (str.slice(-suff.length) === suff ? 1 : 0);
/*====================================== */
function solution(my_string, n) {
  return my_string.slice(0, n);
}
/*====================================== */
const solution = (str, suff) => (str.endsWith(suff) ? 1 : 0);
/*====================================== */
function solution(my_string, s, e) {
  let answer = my_string.split('');
  let result = answer.slice(s, e + 1).reverse();
  answer.splice(s, e + 1, ...result).join('');
  return answer.join('');
}
/*====================================== */
function solution(my_string, m, c) {
  let result = '';

  for (let i = c - 1; i < my_string.length; i += m) {
    result += my_string[i];
  }

  return result;
}
/*====================================== */
function solution(q, r, code) {
  let result = '';

  for (let i = 0; i < code.length; i++) {
    if (i % q === r) {
      result += code[i];
    }
  }

  return result;
}
/*====================================== */
function solution(my_string) {
  let result = Array(52).fill(0); // 대소문자 카운트를 담을 배열 (A-Z, a-z)

  for (let char of my_string) {
    // 문자열을 하나씩 돌면서
    if (char >= 'A' && char <= 'Z') {
      // 대문자라면
      result[char.charCodeAt(0) - 65]++; // 'A'의 유니코드 값 65를 빼면 0~25 인덱스로 대응
    } else if (char >= 'a' && char <= 'z') {
      // 소문자라면
      result[char.charCodeAt(0) - 97 + 26]++; // 'a'의 유니코드 값 97을 빼고, 26을 더해서 26~51 인덱스로 대응
    }
  }

  return result; // 최종적으로 카운트된 배열을 반환
}
//
function solution(my_string) {
  let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var answer = new Array(52).fill(0);
  for (let i = 0; i < my_string.length; i++) {
    answer[alp.indexOf(my_string[i])]++;
  }
  return answer;
}
console.log('dkssud');
