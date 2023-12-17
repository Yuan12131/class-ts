import * as React from 'react';

export interface IAppProps {
}

export interface IAppState {
  counter: number;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  // componentDidMount 메서드를 오버라이딩
  // 오버라이딩(Overriding) : 객체 지향 프로그래밍에서 부모 클래스의 메서드를 자식 클래스에서 재정의
  // -> 자식 클래스에서 부모 클래스에 이미 정의된 메서드를 같은 이름의 메서드로 다시 정의하고 사용하는 것을 의미
  // 이 메서드는 컴포넌트가 마운트된 후에 호출
  componentDidMount() {
    console.log('Component is mounted!');
    // 여기에서 비동기 작업이나 초기 데이터 로딩 등을 수행
  }

  public render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
