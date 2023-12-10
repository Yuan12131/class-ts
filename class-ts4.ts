// 객체 배열 예시
/**
 * interface 문법을 통해 '어떤 객체'의 속성(property)과 타입(type) 정의
 * User라는 인터페이스를 따르는 객체는 id와 name 속성을 가져야 하고, id는 number 타입, name은 string 타입이어야만 하게끔
 * 타입 안정성 보장
 */
interface User {
  id: number;
  name: string;
}
/**
 * users라는 배열은 인터페이스(특정 형식)인 User를 따르는 객체만을 원소로 가질 수 있게 제한됨
 * 실제적인 코드로서는 위 interface만 확인하면 어떤 객체든 무슨 내용이 어떤 구조로 되어있는지 추론 할 수 있게 됨
 */
const users: User[] = [
  { id: 1, name: "공욱재" },
  { id: 2, name: "공효진" }
];
/**
 * @param obj User 객체
 * returns Object를 JSON문자열로 변환 후 다시 JSON 객체로 변환한 User 객체
 */
function jsonConvertorObject(obj: User): User {
  return JSON.parse(JSON.stringify(obj));
}
// 얕은 복사
/**
 * 얕은 복사의 개념은 배열의 원소가 객체일 경우, 원소의 객체를 복사하지 않고 참조만 복사하는 것을 의미
 * 아래의 전개 연산자를 통해 객체를 복사하고 있지만, 객체의 속성이 객체일 경우 참조만 복사하게 됨
 */
const shallowCopiedUsers:User[] = users.map((user) => { return user });

// 깊은 복사
/**
 * JSON으로 저장한 후 다시 불러오는 방식을 통해 깊은 복사 구현 가능
 * users 배열과 deepCopiedUSers 배열은 서로 완전히 다른 객체를 참조
 */
const deepCopiedUSers: User[] = users.map((user) => jsonConvertorObject(user));

// 복사된 배열에서 객체 수정
shallowCopiedUsers[0].name = "공욱 재미남"; // 얕은 복사 때문에 원본 배열도 수정됨
deepCopiedUSers[1].name = "공효진 미녀";

// 결과 출력
console.groupCollapsed("객체 배열 예시");
  console.log("원본 배열:", users); // 원본배열
  console.log("얕은 복사 배열:", shallowCopiedUsers) // 얕은 복사 배열
  console.log("깊은 복사 배열:", deepCopiedUSers) // 깊은 복사 배열
  console.groupEnd();

  /**
   * 얕은 복사와 깊은 복사의 차이점
   * 얕은 복사는 객체의 속성이 객체일 경우, 참조만 복사
   * 깊은 복사는 객체의 속성이 객체일 경우, 객체를 복사
   * 메모리 관점에서 얕은 복사는 원본 객체와 복사된 객체가 같은 객체를 참조하고 있기 때문에, 복사된 객체를 수정하면 원본 객체도 수정
   * 깊은 복사는 원본 객체와 복사된 객체가 다른 객체를 참조하고 있기 때문에, 복사된 객체를 수정해도 원본 객체는 수정되지 않음
   * 
   * C언어에서 악명 높은 포인터의 개념과 비슷한데,
   * 눈에 안보이는 메모리 공간에 객체가 저장되어 있고, 변수는 그 메모리 공간을 참조하고 있다는 개념
   * 사람의 눈으로는 변수에 객체가 저장되어 있다고 보이지만, 실제로는 변수는 객체를 참조하고 있을 뿐
   * 그래서 실험을 통해 눈으로 확인하는 것이 중요함
   */