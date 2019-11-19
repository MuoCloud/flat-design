import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { excludeBoxProps, extractBoxStyles } from '../utils';
let defaultColor = 'black';
let boldWeight = '600';
export const setDefaultTextColor = (color) => {
    defaultColor = color;
};
export const setBoldWeight = (weight) => {
    boldWeight = weight;
};
export default memo((props) => {
    const { onPress, size = 14, lineHeight, bold, color = defaultColor, style, ...restProps } = props;
    const textComponent = (<Text style={[
        {
            color,
            fontSize: size,
            ...(lineHeight && { lineHeight }),
            ...(bold && { fontWeight: boldWeight }),
            ...(!onPress && extractBoxStyles(props))
        },
        style
    ]} {...excludeBoxProps(restProps)}/>);
    if (onPress) {
        return (<TouchableOpacity activeOpacity={0.8} onPress={onPress} style={extractBoxStyles(props)}>
        {textComponent}
      </TouchableOpacity>);
    }
    else {
        return textComponent;
    }
});
