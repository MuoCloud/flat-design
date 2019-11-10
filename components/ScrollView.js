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
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
exports.default = react_1.memo((props) => {
    const { flex, color, contentPadding, enableBottomSpace, style, contentContainerStyle, ...restProps } = props;
    return (<react_native_gesture_handler_1.ScrollView style={[
        {
            ...(typeof flex === 'number' && { flex }),
            ...(color && { backgroundColor: color })
        },
        style
    ]} contentContainerStyle={[
        {
            ...(contentPadding && { padding: contentPadding }),
            ...(enableBottomSpace && {
                paddingBottom: (contentPadding || 0) + react_native_iphone_x_helper_1.getBottomSpace()
            })
        },
        contentContainerStyle
    ]} {...restProps}/>);
});
