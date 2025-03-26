function countWordOccurrences(text, word) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi'); // 단어 경계를 고려한 정규식 (대소문자 무시)
  const regex2 = new RegExp(`(^|\\s)${word}($|\\s)`, 'gi'); // 단어 경계를 고려한 정규식 (대소문자 무시)
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

// 예제 실행
const text = 'hi my name id hi and i want to know hi';
// const text =
//   '코딩 테스트는 중요합니다. 코딩 문제를 풀어보면서 코딩 실력을 키울 수 있습니다.';
const word = 'hi';
console.log(`"${word}"의 출현 횟수:`, countWordOccurrences(text, word));
