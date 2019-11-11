import React, { memo, useCallback, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { darken } from '../utils';
import Separator from './Separator';
const BOTTOM_SPACE = getBottomSpace();
export default memo((props) => {
    const { flex, wrap, color = 'transparent', row, column, align, verticalAlign, radius = 0, padding = 0, margin = 0, enableBottomSpace, onPress, style, children, ...restProps } = props;
    const activeColor = props.activeColor ||
        color === 'transparent' ? 'transparent' : darken(color, 4);
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
            ...(wrap && { flexWrap: 'wrap' }),
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
            margin,
            borderRadius: radius
        },
        style
    ];
    const viewComponent = (<View style={finalStyle} {...restProps}>
      {children}
      {(enableBottomSpace && BOTTOM_SPACE > 0) && (<Separator height={BOTTOM_SPACE}/>)}
    </View>);
    if (onPress) {
        return (<TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
        {viewComponent}
      </TouchableWithoutFeedback>);
    }
    else {
        return viewComponent;
    }
});
