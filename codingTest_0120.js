/* 리스트 자르기 */
function solution(n, slicer, num_list) {
  var answer = [];
  let [a, b, c] = slicer;
  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, index) => index % c === 0);
  }
  return answer;
}
// console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));

/* 첫번째로 나오는 음수 */
function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      return i;
    }
  }
  return -1;
}
// 혹은
// const solution = num_list => num_list.findIndex(v => v < 0);

// console.log(solution([12, 4, 15, 46, 38, -2, 15]));
// console.log(solution([13, 22, 53, 24, 15, 6]));

/* 배열만들기 */
function solution(arr, intervals) {
  let answer = [];
  intervals.forEach(interval => {
    let [a, b] = interval;
    answer.push(...arr.slice(a, b + 1));
  });
  return answer;
}
console.log([1, 2, 3, 4, 5][([1, 3], [0, 4])][(2, 3, 4, 1, 2, 3, 4, 5)]);

/* 2의 영역 */
function solution(arr) {
  if (!arr.includes(2)) {
    return [-1];
  }

  let start = arr.indexOf(2);
  let end = arr.lastIndexOf(2);

  return arr.slice(start, end + 1);
}
//
function solution(arr) {
  const from = arr.indexOf(2);
  const end = arr.lastIndexOf(2);

  return from === -1 ? [-1] : arr.slice(from, end + 1);
}

/* 배열조각하기 */
function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      // 짝수 인덱스: query[i] 이후를 버림
      arr = arr.slice(0, query[i] + 1);
    } else {
      // 홀수 인덱스: query[i] 이전을 버림
      arr = arr.slice(query[i]);
    }
  }
  return arr;
}

/* 순서바꾸기 */
function solution(num_list, n) {
  const after = num_list.slice(n);
  const before = num_list.slice(0, n);

  return after.concat(before);
}
//
function solution(num_list, n) {
  num_list.push(...num_list.splice(0, n));
  return num_list;
}

/* 왼쪽 오른쪽 */
function solution(str_list) {
  const lIndex = str_list.indexOf('l');
  const rIndex = str_list.indexOf('r');

  if (lIndex === -1 && rIndex === -1) {
    return [];
  }
  if (lIndex !== -1 && (rIndex === -1 || lIndex < rIndex)) {
    return str_list.slice(0, lIndex);
  }
  if (rIndex !== -1 && (lIndex === -1 || rIndex < lIndex)) {
    return str_list.slice(rIndex + 1);
  }
}
//
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'l') return arr.slice(0, i);
    if (arr[i] === 'r') return arr.slice(i + 1);
  }
  return [];
}
