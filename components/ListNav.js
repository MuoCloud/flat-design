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
const Icon_1 = __importDefault(require("./Icon"));
exports.default = react_1.memo((props) => {
    const { color = 'black', backgroundColor = '#ffffff', activeBackgroundColor = '#f9f9f9', title, onPress, style = {} } = props;
    const [active, setActive] = react_1.useState(false);
    const onPressIn = react_1.useCallback(() => setActive(true), []);
    const onPressOut = react_1.useCallback(() => setActive(false), []);
    return (<react_native_1.TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <react_native_1.View style={[
        {
            paddingHorizontal: 20,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: active ? activeBackgroundColor : backgroundColor
        },
        style
    ]}>
        <react_native_1.Text style={{
        fontSize: 16,
        color
    }}>
          {title}
        </react_native_1.Text>

        <react_native_1.View style={{ marginLeft: 'auto' }}>
          <Icon_1.default name="arrow-ios-forward-outline" color="black" size={20}/>
        </react_native_1.View>
      </react_native_1.View>
    </react_native_1.TouchableWithoutFeedback>);
});
