"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUI = void 0;
const class_module_renderPokemons_1 = require("./class-module-renderPokemons");
function updateUI(rootId, battles) {
    const rootElement = document.getElementById(rootId);
    if (rootElement === null) {
        return;
    }
    rootElement.innerHTML = (0, class_module_renderPokemons_1.renderPokemons)(pokemonList, battles);
}
exports.updateUI = updateUI;
