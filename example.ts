function aTwo(selectElement: HTMLElement, text:string):void {
  selectElement.innerHTML = `<h1>${text}</h1>`
  }

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    aTwo(root, "HH");
  });