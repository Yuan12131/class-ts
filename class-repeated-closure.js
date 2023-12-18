// 두 개의 매개변수 name과 type을 받아 포켓몬 객체를 생성
function Pokemon(name, type) {
  // privateName과 privateType은 클로저를 이용하여 함수 외부에서 접근할 수 없도록 비공개로 유지
  let privateName = name;
  let privateType = type;

  // getName, getType, setType 함수를 가진 객체를 반환
  return {
    getName: function() {
      return privateName;
    },
    getType: function() {
      return privateType;
    },
    setType: function(newType) {
      privateType = newType;
    }
  };
}

// pikachu 객체는 getName, getType, setType 메서드를 갖음
const pikachu = Pokemon('피카츄', '전기');
console.log(pikachu.getName());
console.log(pikachu.getType());

pikachu.setType('노말');
console.log(pikachu.getType());

/**
 * ? 전역적으로 처리했을 때 단점
 * 1. 생성자 함수 Pokemon에서 생성된 객체의 메서드들이 전역 스코프에 노출 -> 다른 부분에서 의도치 않게 해당 메서드에 접근하거나 재할당할 수 있음
 * 2. 비효율적인 메모리 사용 : 생성자 함수를 통해 생성된 모든 객체가 동일한 메서드를 가지게 됨 -> 따라서 메서드의 내용이 변경되거나 추가되면 모든 객체에 영향을 미침
 * 3. 객체 식별의 어려움 : 생성된 객체들이 비슷한 구조를 가지고 있으나 각 객체가 서로 다른 메서드를 갖도록 하려면 추가적인 로직이 필요함
 * 4. 비상태적(Stateless) 구조 : 생성자 함수 내부에서 상태를 관리하고 있지만, 생성된 객체는 단순히 메서드를 가지고 있고 내부 상태를 직접적으로 조작할 수 있는 방법이 없음 -> 생성된 객체는 주로 상태를 유지하지 않는 비상태적인 구조를 가지게 됨
* 5. 객체 간 상호작용의 어려움 : 각 객체가 독립적으로 동작하기 때문에 객체 간의 상호작용이 어려워짐 -> 객체 간 정보 교환 등이 번거로워질 수 있음
*! 위의 단점들을 해결하려면 객체 지향 프로그래밍의 원칙을 적용하여 클래스와 인스턴스를 사용하고, 캡슐화와 상속 등을 통해 더 모듈화되고 유지보수가 쉬운 코드를 작성(클래스 기반의 디자인 패턴을 적용하여 해결)
 */