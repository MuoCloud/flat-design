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
const react_native_ui_kitten_1 = require("react-native-ui-kitten");
const Icon_1 = __importDefault(require("./Icon"));
exports.default = react_1.memo((props) => {
    const { color = 'black', icon, style, onPress } = props;
    return (<react_native_ui_kitten_1.TopNavigationAction activeOpacity={0.8} icon={iconStyle => <Icon_1.default style={iconStyle} color={color} name={icon}/>} style={style} onPress={onPress}/>);
});
