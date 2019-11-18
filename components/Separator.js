import React, { memo } from 'react';
import { View } from 'react-native';
import { extractBoxStyles } from '../utils';
export default memo((props) => {
    const { color = 'transparent', height = 10, style, ...restProps } = props;
    return (<View style={[
        {
            height,
            backgroundColor: color
        },
        extractBoxStyles(props),
        style
    ]} {...restProps}/>);
});
