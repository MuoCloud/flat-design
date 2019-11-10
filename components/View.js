import React, { memo, useCallback, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { darken } from '../utils';
export default memo((props) => {
    const { flex, color = 'transparent', row, column, align, verticalAlign, radius = 0, padding = 0, margin = 0, enableBottomSpace, onPress, style, ...restProps } = props;
    const activeColor = props.activeColor ||
        darken(color === 'transparent' ? '#ffffff' : color, 4);
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
    const [active, setActive] = useState(false);
    const onPressIn = useCallback(() => setActive(true), []);
    const onPressOut = useCallback(() => setActive(false), []);
    const finalStyle = [
        {
            backgroundColor: (onPress && active) ? activeColor : color,
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
    ];
    if (onPress) {
        return (<TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
        <View style={finalStyle} {...restProps}/>
      </TouchableWithoutFeedback>);
    }
    else {
        return (<View style={finalStyle} {...restProps}/>);
    }
});
