import React, { memo } from 'react';
import View from './View';
export default memo((props) => {
    const { color = 'transparent', height = 10, style, ...restProps } = props;
    return (<View style={[
        {
            height,
            backgroundColor: color
        },
        style
    ]} {...restProps}/>);
});
