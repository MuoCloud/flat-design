import React, { memo } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
export default memo((props) => {
    const { flex, color, contentPadding, enableBottomSpace, style, contentContainerStyle, ...restProps } = props;
    return (<ScrollView style={[
        {
            ...(typeof flex === 'number' && { flex }),
            ...(color && { backgroundColor: color })
        },
        style
    ]} contentContainerStyle={[
        {
            ...(contentPadding && { padding: contentPadding }),
            ...(enableBottomSpace && {
                paddingBottom: (contentPadding || 0) + getBottomSpace()
            })
        },
        contentContainerStyle
    ]} {...restProps}/>);
});
