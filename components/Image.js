import React, { memo } from 'react';
import { Image } from 'react-native';
export default memo((props) => {
    const { style, ...restProps } = props;
    return (<Image style={[
        {
            backgroundColor: '#eceff1'
        },
        style
    ]} {...restProps}/>);
});
