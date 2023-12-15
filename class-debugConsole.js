function addJs(a, b) {
  if (typeof(a) === 'number' && typeof(b) === "number") {
    return a + b;
  }
}

console.log(addJs(1, 2));
console.log(addJs("a", "b")) // 의도적인 에러