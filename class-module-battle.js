"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleBattle = void 0;
const class_module_updateUI_1 = require("./class-module-updateUI");
function handleBattle(pokemonName, battles) {
    console.log(`${pokemonName}와의 배틀이 시작되었습니다.`);
    battles += 1;
    (0, class_module_updateUI_1.updateUI)('root', battles);
}
exports.handleBattle = handleBattle;
