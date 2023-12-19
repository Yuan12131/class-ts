"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBattle = exports.setupEventListeners = void 0;
const class_module_battle_1 = require("./class-module-battle");
Object.defineProperty(exports, "handleBattle", { enumerable: true, get: function () { return class_module_battle_1.handleBattle; } });
function setupEventListeners(rootId, pokemons) {
    const rootElement = document.getElementById(rootId);
    if (rootElement === null) {
        return;
    }
    for (let pokemon of pokemons) {
        const button = document.getElementById(`pokemon-${pokemon.id}`);
        if (button === null) {
            continue;
        }
        button.addEventListener('click', () => (0, class_module_battle_1.handleBattle)(pokemon.name));
    }
}
exports.setupEventListeners = setupEventListeners;
