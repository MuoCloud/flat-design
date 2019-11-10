import React, { memo } from 'react';
import { View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import FadeInView from './FadeInView';
export default memo((props) => {
    const { flex, color = 'transparent', row, column, align, verticalAlign, radius = 0, padding = 0, margin = 0, fadeIn, enableBottomSpace, style, ...restProps } = props;
    const verticalAlignValue = {
        top: 'flex-start',
        middle: 'center',
        bottom: 'flex-end'
    }[verticalAlign];
    const alignValue = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end'
    }[align];
    const Component = fadeIn ? FadeInView : View;
    return (<Component style={[
        {
            backgroundColor: color,
            ...(flex && { flex }),
            ...(row && {
                flexDirection: 'row',
                ...(verticalAlign && {
                    alignItems: verticalAlignValue
                }),
                ...(align && {
                    justifyContent: alignValue
                })
            }),
            ...((column || (!column && !row)) && {
                flexDirection: 'column',
                ...(align && {
                    alignItems: alignValue
                }),
                ...(verticalAlign && {
                    justifyContent: verticalAlignValue
                })
            }),
            padding,
            ...(enableBottomSpace && {
                paddingBottom: (padding || 0) + getBottomSpace()
            }),
            margin,
            borderRadius: radius
        },
        style
    ]} {...restProps}/>);
});
