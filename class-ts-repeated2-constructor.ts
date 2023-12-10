class Calculator {
  private _a: number;
  private _b: number;

  // 생성자
  constructor(a: number, b: number) {
    this._a = a;
    this._b = b;
  }

  // getter와 setter
  get a(): number {
    return this._a;
  }

  set a(value: number) {
    this._a = value;
  }

  get b(): number {
    return this._b;
  }

  set b(value: number) {
    this._b = value;
  }

  // 더하기 메서드
  public add(): number {
    return this._a + this._b;
  }

  // 빼기 메서드
  public subtract(): number {
    return this._a - this._b;
  }

  // 곱하기 메서드
  public multiply(): number {
    if (this._b === 0) {
      throw new Error("0으로 나눌 수 없습니다.");
    }
    return this._a * this._b;
  }

  // 정적(static) 메서드: 인스턴스 생성 없이 호출 가능
  static addStatic(a: number, b: number): number {
    return a + b;
  }

  static subtractStatic(a: number, b: number): number {
    return a - b;
  }

  static multiplyStatic(a: number, b: number): number {
    return a * b;
  }

  static divideStatic(a: number, b: number): number {
    if (b === 0) {
      throw new Error("0으로 나눌 수 없습니다.");
    }
    return a / b;
  }
}

// 사용 예
const calc = new Calculator(10, 5);
console.dir(Calculator); //?

/**
 * 생성자 함수의 구조를 위의 console.dir()로 확인하면 아래의 구조 확인 가능
 * static, 즉 정적 메서드는 생성자 함수의 프로퍼티로 붙어 있는 것이 아니라, 생성자 함수 자체의 프로퍼티로 붙어있는 것 확인 가능
 * static(정적)라는 해당 표현의 의미와 public 키워드의 차이는
 * 정적 메서드는 생성자 함수의 인스턴스를 생성하지 않고도 사용할 수 있지만, public 메서드는 인스턴스를 생성해야만 사용할 수 있다는 것
 * 우리가 흔히 사용하고 봐왔던 메서드는 public 메서드
 * static 메서드와 매우 혼동되는 부분이므로 마지막 Calculator.addStatic() 메서드는 new 키워드를 사용하지 않고도 사용 가능
{
  [λ:Calculator]
    addStatic: [λ],
    subtractStatic: [λ],
    multiplyStatic: [λ],
    divideStatic: [λ]
}
 */

console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());
console.log(Calculator.addStatic(10, 5));