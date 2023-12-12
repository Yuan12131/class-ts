function styleMaker() {
    var styles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        styles[_i] = arguments[_i];
    }
    return styles.join(' ');
}
function createElement(tagName, props) {
    var children = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        children[_i - 2] = arguments[_i];
    }
    var elementStrings = [];
    var tag = "<".concat(tagName);
    if (props) {
        for (var prop in props) {
            tag += "".concat(prop, "=\"").concat(props[prop], "\"");
        }
    }
    tag += '>';
    elementStrings.push(tag);
    elementStrings.push.apply(elementStrings, children);
    elementStrings.push("</".concat(tagName, ">"));
    var result = elementStrings.join('');
    return result;
}
var styleStr = styleMaker('color: salmon', 'font-size: 30px');
var divStr = createElement('div', { style: styleStr }, '스타일 적용한 div');
console.log(divStr);
