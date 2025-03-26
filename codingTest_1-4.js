/* 1번 */
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str)
});
*/

/* 2번 */
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log("a = " + input[0] + "\nb = " + input[1]);

    console.log(`a = ${input[0]} \nb = ${input[1]}`);

    console.log('a = ' + Number(input[0]));
    console.log('b = ' + Number(input[1]));
})
    */

/* 3번 */
/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = '';
    n = Number(input[1]);

    for (let i = 0; i < n; i += 1) {
        str += input[0]
    }
    console.log(str)

    //---------------------

    console.log(str.repeat(n));

    //---------------------

    for (let i = 0; i < n; i++) {
        res += str;
    }
    console.log(res);

    //---------------------

    for (i=0; i<n; i++){
        process.stdout.write(str);   
    }
});
*/

/* 4번 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];

  result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result.push(str[i].toLowerCase());
    } else {
      result.push(str[i].toUpperCase());
    }
  }
  console.log(result.join(''));

  // -------------------------------------
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i].toLowerCase());
    }
  }
  console.log(result.join(''));
});
