import {functionA} from "./repeated_prac2.js"

function main(): string {
  console.log("main 함수영역");
  functionA();
  return "end";
}

console.log(main())