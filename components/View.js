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
const react_native_iphone_x_helper_1 = require("react-native-iphone-x-helper");
const FadeInView_1 = __importDefault(require("./FadeInView"));
exports.default = react_1.memo((props) => {
    const { flex, color = 'transparent', row, column, align, verticalAlign, radius = 0, padding = 0, margin = 0, fadeIn, enableBottomSpace, style, ...restProps } = props;
    const verticalAlignValue = {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
    }[verticalAlign];
    const alignValue = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end'
    }[align];
    const Component = fadeIn ? FadeInView_1.default : react_native_1.View;
    return (<Component style={[
        {
            backgroundColor: color,
            ...(flex && { flex }),
            ...(row && {
                flexDirection: 'row',
                ...(verticalAlign && {
                    alignItems: verticalAlignValue
                }),
                ...(align && {
                    justifyContent: alignValue
                })
            }),
            ...((column || (!column && !row)) && {
                flexDirection: 'column',
                ...(align && {
                    alignItems: alignValue
                }),
                ...(verticalAlign && {
                    justifyContent: verticalAlignValue
                })
            }),
            padding,
            ...(enableBottomSpace && {
                paddingBottom: (padding || 0) + react_native_iphone_x_helper_1.getBottomSpace()
            }),
            margin,
            borderRadius: radius
        },
        style
    ]} {...restProps}/>);
});
