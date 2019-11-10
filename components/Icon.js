"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vector_icons_1 = require("@expo/vector-icons");
const react_1 = __importStar(require("react"));
const react_native_eva_icons_1 = require("react-native-eva-icons");
exports.default = react_1.memo((props) => {
    const { size = 20, color = 'black', name, pack = 'eva', style } = props;
    if (pack === 'eva') {
        return <react_native_eva_icons_1.Icon style={style} name={name} height={size} width={size} fill={color}/>;
    }
    else if (pack === 'ion') {
        return <vector_icons_1.Ionicons style={style} name={name} size={size} color={color}/>;
    }
    else if (pack === 'md') {
        return <vector_icons_1.MaterialCommunityIcons style={style} name={name} size={size} color={color}/>;
    }
});
