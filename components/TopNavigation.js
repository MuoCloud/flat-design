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
const react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
const react_native_ui_kitten_1 = require("react-native-ui-kitten");
exports.default = react_1.memo((props) => {
    const { style, titleStyle, barStyle = 'dark-content', color = '#ffffff', titleColor = 'black', border, ...restProps } = props;
    return (<>
      <react_native_1.StatusBar barStyle={barStyle}/>
      <react_native_ui_kitten_1.TopNavigation {...restProps} style={[{
            paddingTop: 11.5 + react_native_iphone_x_helper_1.getStatusBarHeight(true),
            paddingBottom: 11.5,
            backgroundColor: color,
            ...(border && {
                borderBottomColor: border.color,
                borderBottomWidth: border.width
            })
        }, style]} titleStyle={[{
            fontSize: 16,
            lineHeight: 20,
            color: titleColor
        }, titleStyle]}/>
    </>);
});
