function add(a: number, b: number) {
  return a + b;
}

function substract(a: number, b: number) {
  return a - b;
}

function operation(a: number, b: number) {
  var results = [
    { operatrion : '덧셈', result : add(a, b) },
    { operation : '뺄셈', result : substract(a, b) }
  ]
  console.table(results);
}

operation(10, 5);