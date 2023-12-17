import * as React from 'react';

// IAppProps 인터페이스를 정의
export interface IAppProps {
  // 속성(props)의 타입을 명시
}

// IAppState 인터페이스를 정의
export interface IAppState {
  // 상태(state)의 타입을 명시
}

// App 클래스를 정의할 때 React.Component를 상속
// 제네릭으로 IAppProps와 IAppState를 사용하여 속성(props)과 상태(state)의 타입을 지정
export default class App extends React.Component<IAppProps, IAppState> {
  // 생성자 메서드를 정의
  // 생성자에서 초기 상태(state)를 설정
  constructor(props: IAppProps) {
    // 부모 클래스의 생성자를 호출
    // React.Component의 생성자를 호출하여 React 컴포넌트의 기능을 상속
    super(props);

    // 컴포넌트의 초기 상태를 설정
    this.state = {
      // 여기에 초기 상태의 값들을 정의
    };
  }

  // render 메서드를 정의
  // 이 메서드에서 컴포넌트의 UI를 정의
  public render() {
    return (
      <div>
        {/* 컴포넌트의 UI 내용을 작성 */}
      </div>
    );
  }
}
