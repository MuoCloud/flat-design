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
const Modal_1 = __importDefault(require("../Modal"));
const Portal_1 = __importDefault(require("../Portal"));
exports.default = react_1.memo(react_1.forwardRef((props, ref) => {
    const { renderItem, children, position = 'top-right' } = props;
    const [modalVisible, setModalVisible] = react_1.useState(false);
    const show = react_1.useCallback(() => {
        setModalVisible(true);
    }, []);
    const hide = react_1.useCallback(() => {
        setModalVisible(false);
    }, []);
    const positionStyle = react_1.useMemo(() => {
        if (position === 'top-right') {
            return {
                alignItems: 'flex-end',
                justifyContent: 'flex-start'
            };
        }
        else if (position === 'top-left') {
            return {
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            };
        }
        else if (position === 'bottom-right') {
            return {
                alignItems: 'flex-end',
                justifyContent: 'flex-end'
            };
        }
        else if (position === 'bottom-left') {
            return {
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
            };
        }
    }, []);
    react_1.useImperativeHandle(ref, () => ({
        show,
        hide
    }));
    return (<react_native_1.View ref={this.setContainerRef} collapsable={false}>
      <react_native_1.View>{renderItem}</react_native_1.View>

      <Portal_1.default>
        <Modal_1.default visible={modalVisible} onDismiss={hide} contentContainerStyle={{
        flex: 1,
        paddingTop: react_native_1.Platform.OS === 'android' ? react_native_iphone_x_helper_1.getStatusBarHeight() : 0
    }}>
          <react_native_1.TouchableWithoutFeedback onPress={hide}>
            <react_native_1.View style={[{ flex: 1 }, positionStyle]}>
              <react_native_1.View style={{
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 10,
        overflow: 'hidden'
    }}>
                {children}
              </react_native_1.View>
            </react_native_1.View>
          </react_native_1.TouchableWithoutFeedback>
        </Modal_1.default>
      </Portal_1.default>
    </react_native_1.View>);
}));
