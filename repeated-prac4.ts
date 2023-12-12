class Method{
  private _a: number;
  private _b: number;

  constructor(a: number, b: number) {
    this._a = a;
    this._b = b;
  }
  
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
  
  public add(): number {
    return this._a + this._b;
  }

  public substract(): number {
    return this._a - this._b;
  }
}

const met = new Method(10, 5);
console.dir(Method);

console.log(met.add());
console.log(met.substract());