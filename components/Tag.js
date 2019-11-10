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
exports.default = react_1.memo((props) => {
    const { children, style, textStyle, onPress, color = '#555', textColor = 'white', bold } = props;
    return (<react_native_1.TouchableOpacity activeOpacity={onPress ? 0.8 : 1} onPress={onPress} style={[
        {
            backgroundColor: color,
            paddingHorizontal: 12,
            height: 26,
            justifyContent: 'center',
            borderRadius: 15
        },
        style
    ]}>
      <react_native_1.Text style={[
        {
            color: textColor,
            fontSize: 13,
            lineHeight: 20,
            ...(bold && {
                fontWeight: 'bold'
            })
        },
        textStyle
    ]}>
        {children}
      </react_native_1.Text>
    </react_native_1.TouchableOpacity>);
});
