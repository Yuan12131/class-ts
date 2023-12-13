// interface는 데이터타입을 정하는 협업 역할
interface MemberData {
  id: string;
  password: string;
  address: string;
  cart: string[];
}

// 클로저를 사용하는 함수
/**
 * 
 * 멤버 데이터에 접근하는 함수를 반환하는 클로저 생성
 * @param id - 멤버의 id
 * @param password  - 멤버의 비밀번호
 * @param address  - 멤버의 주소
 * @param cart - 멤버의 쇼핑카트
 * @returns 멤버 데이터를 반환하는 함수
 */
function MemberDataWithClosure(id: string, password: string,  address: string, cart: string[]): () => MemberData {
  return function() {
    return { id, password, address, cart };
  };
}