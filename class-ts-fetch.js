"use strict";
// Props라는 type 선언을 통해 반드시 문자열로만 구성된 객체를 전달받아야 함을 명시
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Promise<HTMLElement> 리턴이 Promise 객체를 반환한다는 의미
// 꺽쇠 <> 표기는 제네릭 문법으로 '할당'할 때 결정
// 따라서 함수 fetchExample은 HTMLElement 무언가를 Promise 객체로 핸들링한다는 뜻
// async와 함께 사용한 것을 통해 Promise 객체를 동기적으로 작성된 코드처럼 작동
// fetch()는 기본적으로 비동기적으로 작동하기 때문에 비동기 상태로 그대로 두면, 아래의 HTML component 생성하는 부분보다 먼저 실행될 수 있음 (통신상태에 따라)
function fetchExample(tagName, props, children, url) {
    return __awaiter(this, void 0, void 0, function* () {
        // HTML 요소 생성
        const element = document.createElement(tagName);
        // Props 설정
        for (const key in props) {
            element.setAttribute(key, props[key]);
        }
        // 초기 내용 설정
        element.innerHTML = children;
        try {
            // Fetch API를 사용해 데이터 가져오기
            // 위 함수 선언부에서 async 키워드를 사용했기 때문에 fetch()함수는 await 키워드를 사용
            const response = yield fetch(url);
            if (!response.ok) { // AJAX 통신의 일반적인 객체 구조에서는 ok 속성을 사용한 예
                throw new Error(`통신상태 불량 : ${response.status}`);
            }
            // 위 fetch() await 키워드 때문에 아래 data라는 변수의 chunks는 Promise 객체가 되며
            // 동기적으로 작성된 코드처럼 작동
            const data = yield response.json();
            // 가져온 데이터로 컴포넌트 업데이트
            element.innerHTML = JSON.stringify(data, null, 2);
        }
        catch (error) {
            console.error('Fetch error:', error);
            // 실패 시 메세지 업데이트
            element.innerHTML = "아직 데이터가 수신되지 않았습니다.";
        }
        return element;
    });
}
// 사용 예시
// 문서 (html)에서 위코드가 불러와지거나 작성되었다고 가정
const root = document.getElementById('root');
fetchExample('div', { class: 'example' }, '로딩중', ' https://jsonplaceholder.typicode.com/todos/1')
    .then((div) => { root === null || root === void 0 ? void 0 : root.appendChild(div); })
    .catch((error) => { console.error('catch 구문 error 매개변수 인자가 전달됨:', error); });
