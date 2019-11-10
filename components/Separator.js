import React, { memo } from 'react';
import { View } from 'react-native';
export default memo((props) => {
    const { color = 'transparent', height = 10 } = props;
    return (<View style={{
        height,
        backgroundColor: color
    }}/>);
});
