/// <reference types="react" />
import { GestureResponderEvent } from 'react-native';
import { AutoHeightImageProps } from 'react-native-auto-height-image';
import { BoxProps } from '../types/common-props';
interface Props extends BoxProps, AutoHeightImageProps {
    onPress?: (event: GestureResponderEvent) => void;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
