import React, { memo } from 'react';
import { Text } from 'react-native';
let defaultColor = 'black';
export const setDefaultTextColor = (color) => {
    defaultColor = color;
};
export default memo((props) => {
    const { size = 14, lineHeight, bold, color = defaultColor, style, ...restProps } = props;
    return (<Text style={[
        {
            color,
            fontSize: size,
            ...(lineHeight && { lineHeight }),
            ...(bold && { fontWeight: 'bold' })
        },
        style
    ]} {...restProps}/>);
});
