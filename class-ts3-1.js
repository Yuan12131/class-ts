export const styleToString = style => {
  const entries = Object.entries(style);
  const objectValues = entries.map(([key, value]) => `${key}: ${value};`);
  return objectValues.join(' ');
}