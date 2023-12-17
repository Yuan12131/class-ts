// React 불러오기
import * as React from 'react';

// IAppProps라는 이름의 인터페이스를 선언
// 이 인터페이스는 App 컴포넌트의 props에 대한 타입 정보를 제공
export interface IAppProps {
}

// App 컴포넌트를 선언
// 컴포넌트 : 사용자 인터페이스를 구성하는 독립적인 모듈
// React.Component를 상속하며 
// : React의 기본 클래스인 Component를 확장하여 새로운 컴포넌트 클래스를 만듦 
// -> React의 핵심 기능 (생명주기(lifecycle) 메서드, 상태(state) 관리, 속성(props) 처리 등)을 활용하여 컴포넌트를 만들 수 있음
// IAppProps를 제네릭으로 사용하여 컴포넌트의 props 타입을 지정 (제네릭을 통해 컴포넌트에 속성(props)의 타입을 동적으로 설정할 수 있도록 하는 것)
export default class App extends React.Component<IAppProps> {
  // render 메서드를 오버라이딩하여 컴포넌트의 UI를 정의
  public render() {
    // JSX 문법을 사용하여 컴포넌트의 UI를 작성
    return (
      <div>
        {/* 여기에 컴포넌트의 내용을 추가 */}
      </div>
    );
  }
}

// + 속성 타입 정의 예시
// App 컴포넌트를 사용할 때 해당 컴포넌트가 받아야 하는 속성의 타입을 명시적으로 정할 수 있음
const myProps: IAppProps = {
  // 속성의 값들을 여기에 정의
};

// App 컴포넌트를 사용할 때 속성을 전달
const myApp = <App {...myProps} />;
