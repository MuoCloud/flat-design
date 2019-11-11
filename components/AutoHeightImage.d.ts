/// <reference types="react" />
import { GestureResponderEvent } from 'react-native';
import { AutoHeightImageProps } from 'react-native-auto-height-image';
interface Props extends AutoHeightImageProps {
    onPress: (event: GestureResponderEvent) => void;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
