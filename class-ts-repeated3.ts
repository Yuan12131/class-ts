/**
 * 타입 선언 방식 때문에 Props 라는 객체는 반드시 key도, value도 string이어야만 함
 */
type Props = { [key: string]: string };

/**
 * @param styles style 속성에 적용할 스타일 문자열들
 * @returns ";"이 포함된 스타일 문자열
 * @description
 * 
 * 문자열을 합치는 간단한 함수이므로, 사용성이 그리 높지는 않은 안티패턴이지만
 * 함수가 어떻게 호출되고 사용되어 결국엔 다른 형태로 바뀐다는 것을 익힐 요량으로
 * styleValueMaker 함수를 만듦
 */
function styleValueMaker(...styles: string[]): string {
  return styles.join(';');
}


/**
 * @param tagName string
 * @param props Props 타입 객체 (key: string, value: string)
 * @param children 전개 연산자를 사용하여 가변 인자로 받은 문자열들 최종형태는 문자열이 원소인 배열
 * @returns HTML처럼 보이는 문자열
 * @description 
 * 
 * 반복적인 규칙이 담겨있는 HTML 특성을 조립하는 함수
 * 굳이 DOM API 메서드를 사용하지 않고 문자열을 조립하면
 * 디버깅 할 때도 편하고, 빠르게 작성할 수 있음
 * 
 * 마치 '문장 만들기' 기능을 극대화시킨 GPT와 비슷한 느낌
 * 
 * 두 개의 지역변수를 elementStrings, startTag는 각각의 역할을 수행하고 정해진만큼의 생명주기를 가짐
 * 
 * typescript의 명시성에 따라 아래의 함수 선언문 한줄을 읽는 것으로 이 함수가 어떤 역할을 하는지 추론할 수 있음
 */

function createElement(tagName: string, props?: Props, ...children: string[]): string {
  // elementStrings 배열을 초기화
  let elementStrings: string[] = [];

  // 태그 시작 부분 조립
  let startTag = `<${tagName}`;
  if (props) {
    for (let prop in props) {
      startTag += ` ${prop}="${props[prop]}"`;
    }
  }
  startTag += '>';
  elementStrings.push(startTag);

  // 자식 요소들 추가
  elementStrings.push(...children);

  // 태그 종료 부분 추가
  elementStrings.push(`</${tagName}>`);

  // 배열을 문자열로 합쳐서 반환
  const result = elementStrings.join('');
  return result;
}

// 사용 예제
let styleString = styleValueMaker('color: red', 'font-size: 16px', 'padding: 10px');
let divString = createElement('div', { style: styleString }, '이것은 스타일이 적용된 div 입니다.');
console.log(divString);