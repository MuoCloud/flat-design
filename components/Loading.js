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
const loading_json_1 = __importDefault(require("../assets/lottie/loading.json"));
const Modal_1 = __importDefault(require("./Modal"));
const Portal_1 = __importDefault(require("./Portal"));
exports.default = react_1.memo((props) => {
    const { isLoading } = props;
    return (<Portal_1.default>
      <Modal_1.default visible={isLoading} dismissable={false}>
        <react_native_1.View style={{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .15)',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
          <lottie_react_native_1.default style={{
        width: 120,
        height: 120
    }} autoPlay={true} source={loading_json_1.default}/>
        </react_native_1.View>
      </Modal_1.default>
    </Portal_1.default>);
});
