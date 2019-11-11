import React, { memo, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
let defaultColor = 'black';
export const setDefaultTextColor = (color) => {
    defaultColor = color;
};
export default memo((props) => {
    const { onPress, size = 14, lineHeight, bold, color = defaultColor, style, children, ...restProps } = props;
    const textComponent = useMemo(() => (<Text style={[
        {
            color,
            fontSize: size,
            ...(lineHeight && { lineHeight }),
            ...(bold && { fontWeight: 'bold' })
        },
        style
    ]} children={children} {...restProps}/>), [children]);
    if (onPress) {
        return (<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        {textComponent}
      </TouchableOpacity>);
    }
    else {
        return textComponent;
    }
});
