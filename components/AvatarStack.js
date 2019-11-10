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
const lodash_1 = require("lodash");
const react_1 = __importStar(require("react"));
const Avatar_1 = __importDefault(require("./Avatar"));
const View_1 = __importDefault(require("./View"));
exports.default = react_1.memo((props) => {
    const { sources, size = 40, style, ...restProps } = props;
    const reversedSources = react_1.useMemo(() => lodash_1.reverse(sources).slice(0, 3), [sources]);
    return (<View_1.default style={[
        {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            alignSelf: 'flex-start'
        },
        style
    ]} {...restProps}>
      {lodash_1.map(reversedSources, (source, index) => (<Avatar_1.default key={index} height={size} width={size} source={source} style={{
        marginRight: -(size * 0.7),
        borderColor: '#ffffff',
        borderWidth: 2
    }}/>))}
    </View_1.default>);
});
