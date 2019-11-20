import React, { memo } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { excludeBoxProps, extractBoxMarginStyles, extractBoxPaddingStyles, extractFlexStyles } from '../utils';
import Separator from './Separator';
const BOTTOM_SPACE = getBottomSpace();
export default memo((props) => {
    const { color, enableBottomSpace, style, contentContainerStyle, children, ...restProps } = props;
    return (<ScrollView style={[
        {
            ...(color && { backgroundColor: color })
        },
        extractBoxMarginStyles(props),
        extractFlexStyles(props),
        style
    ]} contentContainerStyle={[
        extractBoxPaddingStyles(props),
        contentContainerStyle
    ]} {...excludeBoxProps(restProps)}>
      {children}

      {(enableBottomSpace && BOTTOM_SPACE > 0) && (<Separator height={BOTTOM_SPACE}/>)}
    </ScrollView>);
});
