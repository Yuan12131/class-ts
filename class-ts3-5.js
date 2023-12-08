import { createComponent } from "./class-ts3-4";

const myComponent = createComponent('div', { id: 'example', style: { color: 'red' } }, ['이것자스렸다']);
const root = document.getElementById("root");
root.innerHTML = myComponent;