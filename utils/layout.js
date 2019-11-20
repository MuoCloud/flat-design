import { Dimensions } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
const WINDOW = Dimensions.get('window');
export default {
    WINDOW_WIDTH: WINDOW.width,
    WINDOW_HEIGHT: WINDOW.height,
    STATUSBAR_HEIGHT: getStatusBarHeight(true),
    BOTTOM_SPACE: getBottomSpace()
};
