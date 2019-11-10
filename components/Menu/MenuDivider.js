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
    const { color = 'rgba(0, 0, 0, .05)' } = props;
    return (<react_native_1.View style={{
        backgroundColor: color,
        height: 1,
        marginHorizontal: 10,
        marginVertical: 2.5
    }}/>);
});
