// makeReact 함수는 간략화된 useState 훅의 모의 버전
const makeReact = function () {
  // 전역상태 저장소, 실제 React에서는 각 컴포넌트가 자신의 상태를 관리
  const global = {};
  let index = 0;

  function useState(initialState) {
    // 상태 배열이 아직 초기화되지 않았다면 초기화
    // 이 배열은 모든 상태 값을 저장
    if(global.states === undefined) {
      global.states = [];
    }

    // 현재 상태를 가져오거나 초기 상태 설정
    // 여기서는 상태가 배열에 저장되며 순서에 따라 관리
    // global.states[index] 값이 없으면 initialState를 사용하는 취지의 OR 연산자 사용
    const currentState = global.states[index] || initialState;
    global.states[index] = currentState;

    // setState 함수는 클로저를 사용하여 현재 상태의 인덱스를 기억
    // 상태를 업데이트 하려면 이 함수 호출
    const setState = (function () {
      let currentIndex = indexl //currentIndex도 클로저
      return function(value) {
        global.states[currentIndex] = value
      }
    })();
    // (function() { 로직 })() : 즉시 실행함수 IIFE (Immediately Invoked Function Expression)
    // 선언과 동시에 실행되는 함수로 한번만 실행되고 사라짐
    // 매번 메모리에 남아있는 함수 선언과 다름
    // 특수한 경우에만 사용하는 것이 좋음(찾아야 하는 경우가 있음)

    // 다음 상태를 위해 인덱스 증가
    index = index + 1;

    // 현재 상태와 그 상태를 업데이트하는 함수를 반환
    // 이는 React의 useState 훅과 유사한 패턴
    return [currentState. setState]; //[상태, 상태를 업데이트하는 함수]
  }

  return useState; // useState() 함수는 결국 배열을 반환하는 함수
}

// MakeComponent 함수는 간략화된 React 컴포넌트
function MakeComponent() {
  // useState 훅을 사용하여 상태와 상태 설정 함수 가져오기
  // 초기상태는 true
  const useState = makeReact(); // useState() 구현을 위한 안티패턴
  const [state, setState] = useState(true);

  // 결과적으로  아래와 같은 간단한 Clock 이벤트 핸들일 뿐이지만,
  // 내부적으로는 '지정된 상태'를 업데이트하는 로직을 품고 있음
  return (
    <>
    <div>{state.toString()}</div>
    <button onClick={() => setState(!state)}>토글</button>
    </>
  )
}

console.log(MakeComponent());