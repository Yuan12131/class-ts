class Minam {
  static sayHello(): string {
    return "hello kongukjae";
  }
}

console.log(Minam.sayHello());

class Chunam {
  sayHello(): string {
    return "bye kongukjae";
  }
}

const chunamInstance = new Chunam();
console.log(chunamInstance.sayHello());