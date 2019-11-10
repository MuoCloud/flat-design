"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
let defaultColor = 'black';
exports.setDefaultTextColor = (color) => {
    defaultColor = color;
};
exports.default = react_1.memo((props) => {
    const { size = 14, lineHeight, bold, color = defaultColor, style, ...restProps } = props;
    return (<react_native_1.Text style={[
        {
            color,
            fontSize: size,
            ...(lineHeight && { lineHeight }),
            ...(bold && { fontWeight: 'bold' })
        },
        style
    ]} {...restProps}/>);
});
