function aTwo(selectElement, text) {
    selectElement.innerHTML = "<h1>".concat(text, "</h1>");
}
document.addEventListener("DOMContentLoaded", function () {
    var root = document.getElementById("root");
    aTwo(root, "Hello");
});
