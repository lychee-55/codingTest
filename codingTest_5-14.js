/* 5번 특수문자 출력력*/

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('close', function () {
//   console.log('!@#$%^&*(\\\'"<>?:;');

//   /*
//     이스케이프 문자 사용
//     - 문법적으로 특별한 의미를 가지는 문자를
//       일반 문자로 취급하도록 하는 기능입니다

//     예시 :
//      - ' → \'
//      - " → \"
//      - \ → \\
//     */

// })

/* 6번 덧셈식 출력 */
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on('line', function (line) {
//   input = line.split(' ');
// }).on('close', function () {
//   console.log(
//     `${Number(input[0])} + ${Number(input[1])} = ${
//       Number(input[0]) + Number(input[1])
//     }`,
//   );
// //--------------------------
//   const a = Number(input[0]);
//   const b = Number(input[1]);
//   console.log(`${a} + ${b} = ${a + b}`);
// });

/* 7번 문자열 붙여여 출력 */
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     str1 = input[0];
//     str2 = input[1];

//     console.log(`${str1}${str2}`)
// });

/* 8번 문자열 돌리기 */
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on('line', function (line) {
//   input = [line];
// }).on('close', function () {
//   str = input[0].split('');
//   const [a, b, c, d, e] = str;
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   console.log(e);
// });

/* 9번 홀짝 구분하기*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  n = Number(input[0]);
  if (n % 2 === 0) {
    console.log(`${n} is even`);
  } else if (n % 2 === 1) {
    console.log(`${n} is odd`);
  }
});

/* 10번 문자열 겹쳐쓰기기*/
function solution(my_string, overwrite_string, s) {
  let answer = [...my_string];
  // 인덱스 s부터 overwrite_string.length를 삭제하고, overwrite_string을 넣는 식
  answer.splice(s, overwrite_string.length, overwrite_string);

  return answer.join('');
}

/* 11번 문자열 섞기*/
function solution(str1, str2) {
  let answer = '';
  for (let i = 0; i < str1.length; i++) answer += str1[i] + str2[i];

  return answer;
}

/* 12번 문자열 변환*/
function solution(arr) {
  return arr.join('');
}

/* 13번 문자열 곱하기 */
function solution(my_string, k) {
  return my_string.repeat(k);
}

/* 14번 더 크게 합치기 */
