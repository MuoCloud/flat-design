"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const lottie_react_native_1 = __importDefault(require("lottie-react-native"));
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_auto_height_image_1 = __importDefault(require("react-native-auto-height-image"));
const image_loading_json_1 = __importDefault(require("../assets/lottie/image_loading.json"));
exports.default = (props) => {
    const { onHeightChange, ...restProps } = props;
    const [loaded, setLoaded] = react_1.useState(false);
    const onHeightChangeHandler = react_1.useCallback((height) => {
        if (!loaded && height > 0) {
            setLoaded(true);
        }
        if (onHeightChange) {
            onHeightChange(height);
        }
    }, [loaded]);
    return (<react_native_1.View style={{ backgroundColor: '#eceff1' }}>
      {!loaded && (<react_native_1.View style={{ alignItems: 'center' }}>
            <lottie_react_native_1.default style={{
        width: 150,
        height: 150
    }} autoPlay={true} source={image_loading_json_1.default}/>
          </react_native_1.View>)}
      <react_native_auto_height_image_1.default onHeightChange={onHeightChangeHandler} {...restProps}/>
    </react_native_1.View>);
};
