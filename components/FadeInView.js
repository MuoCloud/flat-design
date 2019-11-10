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
    const { duration = 200, style, children, ...restProps } = props;
    const [opacity] = react_1.useState(new react_native_1.Animated.Value(0));
    react_1.useEffect(() => {
        react_native_1.Animated.timing(opacity, {
            toValue: 1,
            duration,
            useNativeDriver: true
        }).start();
    }, []);
    return (<react_native_1.Animated.View style={[style, { opacity }]} {...restProps}>
      {children}
    </react_native_1.Animated.View>);
});
