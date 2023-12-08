// Props 인터페이스 정의
interface Props {
  id?: string; // id 속성은 문자열이거나 없을 수 있음
  style?: Partial<CSSStyleDeclaration>; // style 속성은 부분적인 CSS 스타일 선언이거나 없을 수 있음
  [key: string]: any; // 나머지 속성들은 어떤 키와 값이든 받을 수 있음
}
// 인터페이스의 사전적인 정의는 "약속"
// typescript의 interface는 약속

// createComponent 함수 정의
function createComponent(element: string, props: Props, children?: string[]): string {
  let tagParts = [`<${element}`]; // 태그의 시작 부분을 저장하는 배열

  // style 객체를 문자열로 변환하는 함수
  const styleToString = (style: Partial<CSSStyleDeclaration>): string => {
    const entries = Object.entries(style); // style 객체의 키와 값 배열로 변환
    const objectValues = entries.map(([key, value]) => `${key}: ${value};`); // 키와 값을 문자열로 조합
    const result = objectValues.join(' '); // 배열의 항목들을 공백으로 연결하여 문자열로 반환
    return result;
  };

  // props 객체의 각 속성을 문자열로 변환하여 tagParts 배열에 추가
  for (const [key, value] of Object.entries(props)) {
    let attributeString;
    if (key === 'style' && typeof value === 'object') {
      // style 속성인 경우, styleToString 함수를 사용하여 문자열로 변환
      attributeString = `style="${styleToString(value)}"`;
    } else {
      // 그 외의 속성은 그대로 문자열로 변환
      attributeString = ` ${key}="${value}"`;
    }
    tagParts.push(attributeString);
  }

  tagParts.push('>'); // 태그의 시작 부분을 마무리하고, 내용을 추가할 준비

  // children이 존재하는 경우, tagParts 배열에 자식 요소들을 추가
  if (children) {
    tagParts.push(...children);
  }

  tagParts.push(`</${element}>`); // 태그의 끝 부분을 추가

  const result = tagParts.join(''); // 배열의 항목들을 공백으로 연결하여 최종 문자열 생성
  return result; // 최종적으로 만들어진 HTML 태그를 반환
}

// 사용 예시
const myComponent = createComponent('div', { id: 'example', style: { color: 'red' } }, ['안녕하세요']);
const root = document.getElementById('root');
if (root) {
  root.innerHTML = myComponent; // 최종적으로 만들어진 HTML 태그를 'root' 요소의 innerHTML로 설정
}