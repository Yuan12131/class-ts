"use strict";
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
function MemberDataWithClosure(id, password, address, cart) {
    return function () {
        return { id, password, address, cart };
    };
}
// 클로저를 사용하지 않는 객체
let MemberDataWithoutClosure = {
    id: 'user2',
    password: 'pass2',
    address: 'address2',
    cart: ['item3', 'item4']
};
/**
 * 위의 객체는 클로저를 사용하지 않았기 때문에 membeDataWithoutClosure.id 등에 직접 접근 가능
 * 개발할 때는 접근하는 것이 편리하지만 유지보수를 하기에는 위험
 * 객체지향 프로그래밍에서는 은닉화 작업을 통해 직접 접근 차단
 * 하지만 함수형 프로그래밍에서는 일반적인 방식으로 은닉화 할 수 없기 때문에
 * 클로저 패턴, 위 예제에서 meberDataWithClosure 함수를 통해 은닉화 구현
 */
// 클로저를 사용하는 예제
let Member1WithClosure = MemberDataWithClosure('user1', 'pass1', 'address1', ['item1', 'item2']);
console.log(Member1WithClosure()); // 클로저를 통한 데이터 접근
// 위 예제에서는 memberDataWithClosure 함수를 통해 은닉화를 구현했기 때문에, member1WithClosure() 함수를 통해서만 데이터에 접근 가능
// 클로저를 사용하지 않는 예제
console.log(MemberDataWithoutClosure); // 직접 데이터 접근
// 그간 개발할 때 매우 자주 사용했지만, 보안상의 문제가 있음
// 위 예제에서는 직접 데이터에 접근했기 때문에 위험한 방법
