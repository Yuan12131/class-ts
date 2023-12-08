import { appendAttributes } from "./class-ts3-2";
import { appendChildren } from "./class-ts3-3";

export const createComponent = (element, props, children) => {
  let tagParts = [`<${element}`];
  tagParts = appendAttributes(tagParts, props);
  tagParts = appendChildren(tagParts, children);
  tagParts.push(`</${element}>`);
  return tagParts.join(' ');
};