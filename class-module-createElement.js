"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createElement = void 0;
function createElement(tagName, props, ...children) {
    const propEntries = Object.entries(props);
    let propString = '';
    for (let [key, value] of propEntries) {
        propString += `${key}="${value}" `;
    }
    return `<${tagName} ${propString.trim()}>${children.join('')}</${tagName}>`;
}
exports.createElement = createElement;
