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
const react_native_ui_kitten_1 = require("react-native-ui-kitten");
exports.default = react_1.memo((props) => {
    const { style, height, width, ...restProps } = props;
    return (<react_native_ui_kitten_1.Avatar style={[
        {
            ...(height && { height }),
            ...(width && { width }),
            backgroundColor: '#eceff1'
        },
        style
    ]} {...restProps}/>);
});
