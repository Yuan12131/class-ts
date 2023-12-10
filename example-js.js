function a() {
  const rootTwo = document.getElementById("rootTwo");
  rootTwo.innerHTML = "<h1> HG </h1>";
}

function aOne(text) {
  const rootThree = document.getElementById("rootThree");
  rootThree.innerHTML = `<h1>${text}</h1>`;
}

document.addEventListener("DOMContentLoaded", () => {
  a();
  aOne("HI");
});