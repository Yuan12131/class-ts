type Props = { [key: string] : string};

function styleMaker(...styles: string[]): string{
  return styles.join(' ');
}

function createElement(tagName: string, props?: Props, ...children: string[]): string {
  let elementStrings: string[] = [];

  let tag = `<${tagName}`;
  if (props) {
    for (let prop in props) {
      tag += `${prop}="${props[prop]}"`;
    }
  }

  tag += '>';
  elementStrings.push(tag);

  elementStrings.push(...children);
  elementStrings.push(`</${tagName}>`);

  const result = elementStrings.join('');
  return result;
}

let styleStr = styleMaker('color: salmon', 'font-size: 30px');
let divStr = createElement('div', { style: styleStr }, '스타일 적용한 div');
console.log(divStr);
