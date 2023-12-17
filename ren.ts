
import * as React from 'react';

class MyComponent extends React.Component {
  // render 메서드는 React 클래스 컴포넌트에서 반드시 정의해야 하는 메서드: 컴포넌트의 UI를 반환
  // React 엔진에 의해 자동으로 호출되며, 컴포넌트의 렌더링 결과물을 생성
  // render 메서드 오버라이딩
  public render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a simple React component.</p>
      </div>
    );
  }
}
