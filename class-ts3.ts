// Props 인터페이스 정의
interface Props {
  id?: string; // id 속성은 문자열이거나 없을 수 있음
  style?: Partial<CSSStyleDeclaration>; // style 속성은 부분적인 CSS 스타일 선언이거나 없을 수 있음
  [key: string]: any; // 나머지 속성들은 어떤 키와 값이든 받을 수 있음
}

class Component {
  private element: string; // HTML 요소의 태그 이름을 저장하는 멤버 변수
  private props: Props; // 컴포넌트의 속성을 저장하는 멤버 변수
  private children?: string[]; // 컴포넌트의 자식 요소들을 저장하는 멤버 변수

  // 생성자 함수로 객체를 초기화
  constructor(element: string, props: Props, children?: string[]) {
    this.element = element;
    this.props = props;
    this.children = children;
  }

  // CSS 스타일 객체를 문자열로 변환하는 함수
  private styleToString(style: Partial<CSSStyleDeclaration>): string {
    const entries = Object.entries(style);
    const objectValues = entries.map(([key, value]) => `${key}: ${value};`);
    return objectValues.join(' ');
  }

  // 컴포넌트의 HTML 태그를 조립하는 함수
  private build(): string {
    let tagParts = [`<${this.element}`];

    // props 객체의 각 속성을 문자열로 변환하여 tagParts 배열에 추가
    for (const [key, value] of Object.entries(this.props)) {
      let attributeString = "";
      if (key === 'style' && typeof value === 'object') {
        // style 속성인 경우, styleToString 함수를 사용하여 문자열로 변환
        attributeString = `style="${this.styleToString(value)}"`;
      } else {
        // 그 외의 속성은 그대로 문자열로 변환
        attributeString = `${key}="${value}"`;
      }
      tagParts.push(attributeString);
    }

    tagParts.push('>');

    // children이 존재하는 경우, tagParts 배열에 자식 요소들을 추가
    if (this.children) {
      tagParts.push(...this.children);
    }

    tagParts.push(`</${this.element}>`);

    return tagParts.join('');
  }

  // 정적 메서드로 create 함수 생성
  public static create(element: string, props: Props, children: string[]): string {
    // 컴포넌트 인스턴스를 생성하고 build 메서드를 호출하여 HTML 태그를 생성
    const component = new Component(element, props, children);
    return component.build();
  }
}

// 사용 예시
const myComponent = Component.create('div', { id: 'example', style: { color: 'red' } }, ['이것은 자바인가 타스인가']);
const root = document.getElementById("root");

// root 요소가 존재하는 경우에만 innerHTML 설정
if (root) {
  root.innerHTML = myComponent;
}