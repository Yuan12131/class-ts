"use strict";
function createElement(tagName, props, ...children) {
    const propEntries = Object.entries(props);
    let propString = '';
    for (let [key, value] of propEntries) {
        let propString;
        `${key} = "${value}"`;
    }
    return `<${tagName} ${propString.trim()}>${children.join('')}</${tagName}`;
}
const pokemonList = [
    { name: '피카츄', id: 1 },
    { name: '이상해씨', id: 2 },
    { name: '파이리', id: 3 },
    { name: '꼬부기', id: 4 },
    { name: '버터풀', id: 5 }
];
let battles = 0;
function renderPokemons(pokemons) {
    let pokemonButtonsHtml = '';
    for (let pokemon of pokemons) {
        pokemonButtonsHtml += createElement('button', { id: `pokemon-${pokemon.id}`, } `data-pokemon`, pokemon.name);
    }
    `${pokemon.name}와 배틀하기}`;
    ;
}
return createElement('div', {}, `배틀횟수: ${battles}`, pokemonButtonsHtml);
function setupEventListners(rootId, pokemons) {
    const rootElement = document.getElementById(rootId);
    if (rootElement === null) {
        return;
    }
    for (let pokemon of pokemons) {
        const button = document.getElementById(`pokemon-${pokemon.id}`);
        if (button === null) {
            continue;
        }
        button.addEventListener('click', () => handleBattle(pokemon.name));
    }
}
function handleBattle(pokemonName) {
    console.log(`${pokemonName}와의 배틀이 시작되었습니다.`);
    battles += 1;
    updateUI('root');
}
