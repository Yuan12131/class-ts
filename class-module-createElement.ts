type Props = {
  [key: string]: string;
};

export function createElement(tagName: string, props: Props, ...children: string[]): string {
  const propEntries = Object.entries(props);
  let propString = '';

  for (let [key, value] of propEntries) {
    propString += `${key}="${value}" `;
  }

  return `<${tagName} ${propString.trim()}>${children.join('')}</${tagName}>`;
}
