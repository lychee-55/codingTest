/*========================수열과 구간 쿼리3=========================== */
function solution(arr, queries) {
  // for(let n =0; n<queries.length;n++){
  //     let i=queries[n][0]
  //     let j=queries[n][1]

  //     let temp = arr[i]
  //     arr[i]=arr[j]
  //     arr[j]=temp
  // }
  //   -----------------------------
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}
// console.log(solution([0,1,2,3,4], [[0, 3], [1, 2], [1, 4]]))

/*========================수열과 구간 쿼리2=========================== */
function solution(arr, queries) {
  let answer = [];

  for (let query of queries) {
    // 문제와 같이 queries의 시작, 끝, 기준값을 설정정
    let [s, e, k] = query;
    let minValue = Infinity;
    // JavaScript에서 무한대를 나타내는 특별한 값
    //

    // [[s, e, k],[s, e, k],[s, e, k]]
    // [[0, 4, 2],[0, 3, 2],[0, 2, 2]]
    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < minValue) {
        minValue = arr[i];
      }
    }

    if (minValue === Infinity) {
      answer.push(-1);
    } else {
      answer.push(minValue);
    }
  }

  return answer;
}

// 혹은

function solution(arr, queries) {
  return queries.map(
    // map을 통해 구조분해할당
    ([s, e, k]) =>
      arr
        .slice(s, e + 1) // s부터 e+1직전 짜기의 원소를 추출출
        .filter(n => n > k) // slice 결과가 [0, 1, 2, 4, 3]이고, k = 2라면, filter 결과는 [4, 3]
        .sort((a, b) => a - b)[0] || -1,
    // (a,b)는 filter배열의 두 원소를 의미,
    //  -를 통해 두 원소의 순서를 결정, 양수면 a가 b뒤, 0이면 순서변동 x, 음수면 a가 b앞
  );
}
/*========================수열과 구간 쿼리4=========================== */
function solution(arr, queries) {
  for (let query of queries) {
    let [s, e, k] = query;
    // [[s, e, k],[s, e, k],[s, e, k]]
    // [[0, 4, 1],[0, 3, 2],[0, 3, 3]]
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        arr[i] += 1;
      }
    }
  }
  return arr;
}
// 혹은
function solution(arr, queries) {
  queries.forEach(([s, e, k]) => {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        arr[i] += 1;
      }
    }
  });
  return arr;
}
/*=======================배열만들기 2============================ */
function solution(l, r) {
  let result = [];

  for (let n = l; n <= r; n++) {
    let nStr = n.toString();
    let isCorrect = true;

    for (let i = 0; i < nStr.length; i++) {
      // "0" 또는 "5"가 아니면 유효하지 않다고 설정
      if (nStr[i] !== '0' && nStr[i] !== '5') {
        isCorrect = false;
        break;
      }
    }

    // 유효한 숫자라면 결과 배열에 추가
    if (isCorrect) {
      result.push(n);
    }
  }

  return result.length > 0 ? result : [-1];
}
/*=========================카운트 업========================== */
function solution(start_num, end_num) {
  let result = [];
  for (let i = start_num; i <= end_num; i++) {
    result.push(i);
  }
  return result;
}
/*==========================콜라츠 수열만들기========================= */
function solution(n) {
  let answer = [n];
  while (n !== 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }
    answer.push(n);
  }
  return answer;
}
/*=========================배열만들기 4========================== */
function solution(arr) {
  let stk = []; // 스택을 초기화
  let i = 0; // 인덱스 초기화

  // 배열을 순차적으로 처리
  while (i < arr.length) {
    // stk가 비어 있다면 arr[i]를 추가
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    }
    // stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 추가
    else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    }
    // stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소 제거
    else {
      stk.pop();
    }
  }

  return stk; // 최종 스택 반환
}
/*======================간단한 논리연산============================= */
// ∨는 논리 합(OR)이며, 둘 중 하나라도 true이면 결과는 true
// ∧는 논리 곱(AND)이며, 두 값이 모두 true일 때만 결과가 true
function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}
/*========================주사위게임=========================== */
function solution(a, b, c, d) {
  const arr = [a, b, c, d]; // 주사위 4개의 값을 배열에 저장
  arr.sort(); // 배열을 정렬하여 작은 값부터 정리

  if (arr[0] === arr[3]) {
    // 네 주사위 값이 모두 같을 때
    return 1111 * arr[0];
  } else if (arr[0] === arr[2] || arr[1] === arr[3]) {
    // 세 주사위 값이 같고 하나가 다른 경우
    return (10 * arr[1] + arr[3]) ** 2;
  } else if (arr[0] === arr[1] && arr[2] === arr[3]) {
    // 두 개씩 같은 값이 나올 때
    return (arr[0] + arr[2]) * Math.abs(arr[0] - arr[2]);
  } else if (arr[0] === arr[1] && arr[2] !== arr[3]) {
    // 두 개 같은 값에 다른 두 값이 나올 때
    return arr[2] * arr[3];
  } else {
    // 네 개의 주사위 값이 모두 다를 때
    return arr[0]; // 가장 작은 값을 반환
  }
}

/*========================글자 이어붙여 문자열=========================== */
function solution(my_string, index_list) {
  return index_list.map(i => my_string[i]).join(''); // list의 각 원소를 str의 인덱스로 사용하여 문자 찾기
}

// 혹은
function solution(my_string, index_list) {
  let result = '';

  for (let i = 0; i < index_list.length; i++) {
    result += my_string.charAt(index_list[i]);
  }

  return result;
}
/*=========================9로 나눈 나머지========================== */
function solution(number) {
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number[i]);
  }

  return sum % 9;
}
// 혹은
function solution(number) {
  var answer = 0;

  for (let i of number) {
    answer += Number(i);
  }

  return answer % 9;
}
/*=========================문자열 여러번 뒤집기========================== */
function solution(my_string, queries) {
  let arr = my_string.split('');

  queries.forEach(([s, e]) => {
    // 배열의 각 원소에 대해 반복 처리
    let sub = arr.slice(s, e + 1).reverse(); // slice는 배열을 추출하는 메소드, .reverse는 배열을 뒤집는 용도
    arr.splice(s, e - s + 1, ...sub); // splice는 s부터 e - s + 1의 요소를 제거하고 sub배열을 그자리에 삽입하는 중
  });

  return arr.join('');
}

function solution(my_string, s, e) {
  let answer = my_string.split('');
  let result = answer.slice(s, e + 1).reverse();
  answer.splice(s, e + 1, ...result).join('');
  return answer.join('');
}
