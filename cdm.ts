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
