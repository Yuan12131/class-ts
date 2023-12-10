var Calculator = /** @class */ (function () {
    // 생성자
    function Calculator(a, b) {
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(Calculator.prototype, "a", {
        // getter와 setter
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculator.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
        },
        enumerable: false,
        configurable: true
    });
    // 더하기 메서드
    Calculator.prototype.add = function () {
        return this._a + this._b;
    };
    // 빼기 메서드
    Calculator.prototype.subtract = function () {
        return this._a - this._b;
    };
    // 곱하기 메서드
    Calculator.prototype.multiply = function () {
        if (this._b === 0) {
            throw new Error("0으로 나눌 수 없습니다.");
        }
        return this._a * this._b;
    };
    // 정적(static) 메서드: 인스턴스 생성 없이 호출 가능
    Calculator.addStatic = function (a, b) {
        return a + b;
    };
    Calculator.subtractStatic = function (a, b) {
        return a - b;
    };
    Calculator.multiplyStatic = function (a, b) {
        return a * b;
    };
    Calculator.divideStatic = function (a, b) {
        if (b === 0) {
            throw new Error("0으로 나눌 수 없습니다.");
        }
        return a / b;
    };
    return Calculator;
}());
// 사용 예
var calc = new Calculator(10, 5);
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
