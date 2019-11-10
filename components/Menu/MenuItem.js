"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../Icon"));
const styles = react_native_1.StyleSheet.create({
    container: {
        height: 54,
        alignItems: 'center',
        maxWidth: 248,
        minWidth: 124,
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 14.5,
        textAlign: 'left',
    },
});
exports.default = react_1.memo((props) => {
    const { children, disabled = false, disabledTextColor = '#bdbdbd', onPress, style, textStyle, icon, ...restProps } = props;
    const [active, setActive] = react_1.useState(false);
    const onPressIn = react_1.useCallback(() => setActive(true), []);
    const onPressOut = react_1.useCallback(() => setActive(false), []);
    return (<react_native_1.TouchableWithoutFeedback disabled={disabled} onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} {...restProps}>
      <react_native_1.View style={[
        styles.container,
        {
            backgroundColor: active ? '#f9f9f9' : 'transparent'
        },
        style
    ]}>
        {icon && (<react_native_1.View style={{ width: 27.5 }}>
              <Icon_1.default name={icon} size={18} color="black"/>
            </react_native_1.View>)}
        <react_native_1.Text numberOfLines={1} style={[
        styles.title,
        disabled && { color: disabledTextColor },
        textStyle,
    ]}>
          {children}
        </react_native_1.Text>
      </react_native_1.View>
    </react_native_1.TouchableWithoutFeedback>);
});
