class Minam {
  static sayHello() {
    return "Hello kongukjae";
  }
}
// Minam 클래스의 static 메서드 사용 예시
console.log(Minam.sayHello());

class Chunam {
  sayHello() {
    return "bye kongukjae"
  }
}

// chunam 클래스의 인스턴스 생성 및 메서드 사용예시
// new 라는 키워드를 통해서 chunamInstance(객체)를 생성
// 하지만, 위 Minam 클래스의 sayHello는 new 키워드가 없어도(인스턴스 생성이 필요 없어도) 사용 가능
// 일반적인 인스턴스 생성은 다분히 동적인 방식
const chunamInstance = new Chunam();
console.log(chunamInstance.sayHello());
