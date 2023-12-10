function loadFunction(name: string):string{
  console.log(`&{name} 함수가 로드되었습니다.`);
  return "loadFunction";
}

function functionA():string {
  console.log('functinoA 함수영역');
  loadFunction('functionA');
  return "functionA";
}

function functionB():string {
  console.log('functionB 함수영역');
  loadFunction('functionB');
  return "functionB";
}

function main():string {
  console.log('main 함수영역');
  functionA();
  functionB();
  return "end";
}

console.log(main());