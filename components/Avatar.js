import React, { memo } from 'react';
import Image from './Image';
export default memo((props) => {
    const { style, size = 40, ...restProps } = props;
    return (<Image height={size} width={size} style={[
        {
            borderRadius: size / 2
        },
        style
    ]} {...restProps}/>);
});
