import { loadFunction } from "./repeated_prac.js"

function functionA(): string{
  loadFunction('functionA');
  return "functionA"
}

export { functionA }