import React, { memo } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Separator from './Separator';
const BOTTOM_SPACE = getBottomSpace();
export default memo((props) => {
    const { flex, color, contentPadding, enableBottomSpace, style, contentContainerStyle, children, ...restProps } = props;
    return (<ScrollView style={[
        {
            ...(typeof flex === 'number' && { flex }),
            ...(color && { backgroundColor: color })
        },
        style
    ]} contentContainerStyle={[
        {
            ...(contentPadding && { padding: contentPadding })
        },
        contentContainerStyle
    ]} {...restProps}>
      {children}
      {(enableBottomSpace && BOTTOM_SPACE > 0) && (<Separator height={BOTTOM_SPACE}/>)}
    </ScrollView>);
});
