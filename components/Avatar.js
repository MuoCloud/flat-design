import React, { memo } from 'react';
import { Avatar } from 'react-native-ui-kitten';
export default memo((props) => {
    const { style, height, width, ...restProps } = props;
    return (<Avatar style={[
        {
            ...(height && { height }),
            ...(width && { width }),
            backgroundColor: '#eceff1'
        },
        style
    ]} {...restProps}/>);
});
