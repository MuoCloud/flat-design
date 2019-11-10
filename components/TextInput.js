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
exports.default = react_1.memo(react_1.forwardRef((props, ref) => {
    const { style, useSingleLinePadding, multiline, ...restRrops } = props;
    return (<react_native_1.TextInput ref={ref} style={[
        {
            paddingHorizontal: 12.5,
            ...react_native_1.Platform.select({
                android: {
                    ...((multiline && !useSingleLinePadding) ? {
                        paddingTop: 10,
                        paddingBottom: 10
                    } : {
                        paddingTop: 7.5,
                        paddingBottom: 7.5
                    })
                },
                ios: {
                    paddingTop: 12.5,
                    paddingBottom: 12.5
                }
            })
        },
        style
    ]} multiline={multiline} {...restRrops}/>);
}));
