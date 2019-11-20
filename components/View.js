import React, { memo, useCallback, useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { darken, excludeBoxProps, extractBoxStyles } from '../utils';
import Separator from './Separator';
const BOTTOM_SPACE = getBottomSpace();
export default memo((props) => {
    const { color = 'transparent', row, column, align, verticalAlign, radius = 0, height, width, enableBottomSpace, onPress, style, touchableStyle, children, ...restProps } = props;
    const activeColor = props.activeColor ||
        (color === 'transparent' ? 'transparent' : darken(color, 5));
    const verticalAlignValue = {
        'top': 'flex-start',
        'middle': 'center',
        'bottom': 'flex-end',
        'space-evenly': 'space-evenly',
        'space-around': 'space-around',
        'space-between': 'space-between'
    }[verticalAlign];
    const alignValue = {
        'left': 'flex-start',
        'center': 'center',
        'right': 'flex-end',
        'space-evenly': 'space-evenly',
        'space-around': 'space-around',
        'space-between': 'space-between'
    }[align];
    const [active, setActive] = useState(false);
    const onPressIn = useCallback(() => setActive(true), []);
    const onPressOut = useCallback(() => setActive(false), []);
    const finalStyle = [
        {
            backgroundColor: (onPress && active) ? activeColor : color,
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
            ...(height && { height }),
            ...(width && { width }),
            borderRadius: radius,
        },
        extractBoxStyles(props),
        style
    ];
    const viewComponent = (<View style={finalStyle} {...excludeBoxProps(restProps)}>
      {children}

      {(enableBottomSpace && BOTTOM_SPACE > 0) && (<Separator height={BOTTOM_SPACE}/>)}
    </View>);
    if (onPress) {
        return (<TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} style={touchableStyle}>
        {viewComponent}
      </TouchableWithoutFeedback>);
    }
    else {
        return viewComponent;
    }
});
