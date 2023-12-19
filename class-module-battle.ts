import { updateUI } from './class-module-updateUI';

export function handleBattle(pokemonName: string, battles: number): void {
  console.log(`${pokemonName}와의 배틀이 시작되었습니다.`);
  battles += 1;
  updateUI('root', battles);
}
