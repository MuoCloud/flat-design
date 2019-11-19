import React, { memo } from 'react';
import View from './View';
export default memo((props) => {
    const { color = '#eceff1', height = 1, mx = 0, my = 10, style, ...restProps } = props;
    return (<View style={[
        {
            height,
            backgroundColor: color,
            marginHorizontal: mx,
            marginVertical: my
        },
        style
    ]} {...restProps}/>);
});
