var Method = /** @class */ (function () {
    function Method(a, b) {
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(Method.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (value) {
            this._a = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Method.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (value) {
            this._b = value;
        },
        enumerable: false,
        configurable: true
    });
    Method.prototype.add = function () {
        return this._a + this._b;
    };
    Method.prototype.substract = function () {
        return this._a - this._b;
    };
    return Method;
}());
var met = new Method(10, 5);
console.dir(Method);
console.log(met.add());
console.log(met.substract());
