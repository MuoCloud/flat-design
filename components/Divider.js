import React, { memo } from 'react';
import { View } from 'react-native';
import { extractBoxStyles } from '../utils';
export default memo((props) => {
    const { color = '#eceff1', height = 1, mx = 0, my = 10, style, ...restProps } = props;
    return (<View style={[
        {
            height,
            backgroundColor: color,
            marginHorizontal: mx,
            marginVertical: my
        },
        extractBoxStyles(props),
        style
    ]} {...restProps}/>);
});
