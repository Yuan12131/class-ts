"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderPokemons = void 0;
const class_module_createElement_1 = require("./class-module-createElement");
function renderPokemons(pokemons, battles) {
    let pokemonButtonsHtml = '';
    for (let pokemon of pokemons) {
        pokemonButtonsHtml += (0, class_module_createElement_1.createElement)('button', { id: `pokemon-${pokemon.id}`, 'data-pokemon': pokemon.name }, `${pokemon.name}와 배틀하기`);
    }
    return (0, class_module_createElement_1.createElement)('div', {}, `배틀횟수: ${battles}`, pokemonButtonsHtml);
}
exports.renderPokemons = renderPokemons;
