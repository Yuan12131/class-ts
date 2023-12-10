interface Props {
  id?: string;
  class?: string,
  style?: Partial<CSSStyleDeclaration>;
  [key: string]: any;
// 인터페이스의 사전적인 정의는 "약속"

function createComponent(element: string, props: Props, children?: string[]): string {
  let tagParts = [`<${element}`];

  const styleToString = (style: Partial<CSSStyleDeclaration>): string => {
    const entries = Object.entries(style);
    const objectValues = entries.map(([key, value]) => `${key}: ${value};`);
    const result = objectValues.join(' ');

    return result;
  };

  for (const [key, value] of Object.entries(props)) {
    let attributeString;
    if (key === 'style' && typeof value === 'object') {

      attributeString = `style="${styleToString(value)}"`;
    } else {
      attributeString = ` ${key}="${value}"`;
    }
    tagParts.push(attributeString);
  }

  tagParts.push('>');


  if (children) {
    tagParts.push(...children);
  }

  tagParts.push(`</${element}>`);

  const result = tagParts.join('');

  return result;
}

const resultValue = createComponent('h1', { id: 'example', class : 'active', style: { color: 'salmon' } }, ['이유안']);
const root = document.getElementById('root');
if (root) {
  root.innerHTML = resultValue;