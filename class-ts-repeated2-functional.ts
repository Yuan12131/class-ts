// 사칙연산 함수 정의
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0){
    throw new Error("0으로 나눌 수 없음")
  }
  return a / b;
}

// 연산 결과를 출력하는 함수
/**
 * @param a number
 * @param b number
 * @returns void
 * @description 사칙연산 결과 출력
 * 
 * 함수 리턴을 정적으로 명시해주는 typescript의 문법 중에 void라는 단어는 직역하면 회피하다는 뜻이며
 * 함수의 리턴값이 없다는 것을 명시적으로 표현
 */
function printOperations(a: number, b: number): void {
  const results = [
    { operation: '덧셈', result: add(a, b) },
    { operation: '뺄셈', result: subtract(a, b) },
    { operation: '곱셈', result: multiply(a, b) },
    { operation: '나눗셈', result: divide(a, b) }
  ];
  console.table(results);
}

// 함수 사용 예
printOperations(10, 5); // 10과 5를 사용한 사칙 연산 결과 출력
