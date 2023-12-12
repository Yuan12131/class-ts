function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function operation(a, b) {
    var results = [
        { operatrion: '덧셈', result: add(a, b) },
        { operation: '뺄셈', result: substract(a, b) }
    ];
    console.table(results);
}
operation(10, 5);
