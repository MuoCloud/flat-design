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
    const { color = '#eceff1', marginX = 0, marginY = 10 } = props;
    return (<react_native_1.View style={{
        height: 1,
        backgroundColor: color,
        marginHorizontal: marginX,
        marginVertical: marginY
    }}/>);
});
