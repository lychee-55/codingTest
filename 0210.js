function solution(binomial) {
  var answer = 0;
  binomial.split('+');
  return binomial;
}
console.log(solution('40 + 12'));

function solution(myString, pat) {
  var answer = 0;
  let str = '';
  for (let i = 0; i < myString.length; i++) {
    // if (myString[i] === 'A') {
    //   str += 'B';
    // } else {
    //   str += 'A';
    // }
    myString[i] === 'A' ? (str += 'B') : (str += 'A');
  }
  return str.includes(pat) ? (answer = 1) : (answer = 0);
}
console.log(solution('ABBAA', 'AABB'));
