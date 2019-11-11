import React, { memo } from 'react';
import Image from './Image';
export default memo((props) => {
    const { style, onPress, size = 40, ...restProps } = props;
    return (<Image onPress={onPress} height={size} width={size} style={[
        {
            borderRadius: size / 2
        },
        style
    ]} {...restProps}/>);
});
