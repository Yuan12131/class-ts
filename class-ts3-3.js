export const appendChildren = (tagParts, children) => {
  if (children) {
    tagParts.push(...children);
  }
  return tagParts;
};