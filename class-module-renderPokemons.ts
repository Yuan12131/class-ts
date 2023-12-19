import { createElement } from './class-module-createElement';

type Pokemon = {
  name: string;
  id: number;
};

export function renderPokemons(pokemons: Pokemon[], battles: number): string {
  let pokemonButtonsHtml = '';

  for (let pokemon of pokemons) {
    pokemonButtonsHtml += createElement('button', { id: `pokemon-${pokemon.id}`, 'data-pokemon': pokemon.name }, `${pokemon.name}와 배틀하기`);
  }

  return createElement('div', {}, `배틀횟수: ${battles}`, pokemonButtonsHtml);
}
