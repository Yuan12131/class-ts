import { handleBattle } from './class-module-battle';

export function setupEventListeners(rootId: string, pokemons: Pokemon[]): void {
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

export { handleBattle };
