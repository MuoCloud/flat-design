import React, { memo } from 'react';
import { View } from 'react-native';
export default memo((props) => {
    const { color = '#eceff1', marginX = 0, marginY = 10 } = props;
    return (<View style={{
        height: 1,
        backgroundColor: color,
        marginHorizontal: marginX,
        marginVertical: marginY
    }}/>);
});
