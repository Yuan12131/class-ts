import { renderPokemons } from './class-module-renderPokemons';

export function updateUI(rootId: string, battles: number): void {
  const rootElement = document.getElementById(rootId);

  if (rootElement === null) {
    return;
  }

  rootElement.innerHTML = renderPokemons(pokemonList, battles);
}
