function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(num_list[i]);
  }
  return result;
}
//
function solution(num_list, n) {
  return num_list.slice(0, n);
}
// console.log(solution([2, 1, 6], 3));
// ======================================
function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list[i]);
  }
  return result;
}
//
// const solution = (num_list, n) => num_list.filter((_, i) => !(i % n));
// filter 안의 인자 중 _ 는 무엇을 뜻하는 건가요 ?
// 언더바로 표시한 인자는 사용하지 않는 변수라는 의미를 표현합니다.
// 개발자들끼리 암묵적으로 사용하지 않는 매개변수라는 의미 입니다. 빈칸으로 두어도 되지만 매개변수가 많으면 헷갈리므로.... '_' 로 표기합니다.
// ======================================
function solution(num_list) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 == 0) {
      sum1 += num_list[i];
    } else {
      sum2 += num_list[i];
    }
  }
  return Math.max(sum1, sum2);
}
//
function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((v, idx) => {
    !(idx % 2) ? (even += v) : (odd += v);
  });

  return odd > even ? odd : even;
}

console.log(solution([4, 2, 6, 1, 7, 6]));
// ======================================
function solution(names) {
  let result = [];
  for (let i = 0; i < names.length; i += 5) {
    result.push(names[i]);
  }
  return result;
}
console.log(
  solution(['nami', 'ahri', 'jayce', 'garen', 'ivern', 'vex', 'jinx']),
);
// ======================================
function solution(todo_list, finished) {
  var answer = [];
  for (let i = 0; i < finished.length; i++) {
    if (!finished[i]) {
      answer.push(todo_list[i]);
    }
  }
  return answer;
}
//
function solution(todo_list, finished) {
  var answer = [];
  return todo_list.filter((e, i) => !finished[i]);
}
console.log(
  solution(
    ['problemsolving', 'practiceguitar', 'swim', 'studygraph'],
    [true, false, true, false],
  ),
);
// ======================================
function solution(numbers, n) {
  var answer = 0;
  for (i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    if (answer > n) {
      return answer;
    }
  }
  return answer;
}
//
function solution(numbers, n) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum > n) break;
  }
  return sum;
}
// ======================================
