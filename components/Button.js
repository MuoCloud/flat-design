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
const utils_1 = require("../utils");
exports.default = react_1.memo((props) => {
    const { children, size = 'large', color = '#ffffff', disabled, round = true, bold = true, textSize, onPress, style, ...restRrops } = props;
    const height = {
        large: 46,
        medium: 40,
        small: 28
    }[size];
    const fontSize = {
        large: 16,
        medium: 14.5,
        small: 12
    }[size];
    const paddingHorizontal = {
        large: 15,
        medium: 12.5,
        small: 10
    }[size];
    const colorSystem = utils_1.getContentColorSystem(color);
    const textColor = props.textColor
        || (colorSystem === 'light-content' ? '#ffffff' : '#000000');
    const [active, setActive] = react_1.useState(false);
    const onPressIn = react_1.useCallback(() => setActive(true), []);
    const onPressOut = react_1.useCallback(() => setActive(false), []);
    return (<react_native_1.TouchableWithoutFeedback onPress={event => {
        if (!disabled) {
            onPress(event);
        }
    }} onPressIn={onPressIn} onPressOut={onPressOut}>
      <react_native_1.View style={[
        {
            justifyContent: 'center',
            alignItems: 'center',
            height,
            paddingHorizontal,
            ...(round && {
                borderRadius: 4
            }),
            ...(disabled ? {
                backgroundColor: colorSystem === 'dark-content'
                    ? utils_1.darken(color, 30)
                    : utils_1.lighten(color, 60)
            } : {
                backgroundColor: active
                    ? (colorSystem === 'dark-content'
                        ? utils_1.darken(color, 3)
                        : utils_1.darken(color, 10))
                    : color
            })
        },
        style
    ]} {...restRrops}>
        <react_native_1.Text style={{
        color: textColor,
        fontSize: textSize || fontSize,
        fontWeight: bold ? 'bold' : 'normal'
    }}>
          {children}
        </react_native_1.Text>
      </react_native_1.View>
    </react_native_1.TouchableWithoutFeedback>);
});
