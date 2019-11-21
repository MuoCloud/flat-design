import React, { memo } from 'react';
import { darken, excludeBoxProps, extractBoxStyles, getContentColorSystem, lighten } from '../utils';
import Text from './Text';
import View from './View';
export default memo((props) => {
    const { children, size = 'large', color = '#ffffff', disabled, round = true, bold = true, textSize, onPress, style, ...restRrops } = props;
    const height = {
        large: 46,
        medium: 40,
        small: 28
    }[size];
    const fontSize = {
        large: 16,
        medium: 14.5,
        small: 12
    }[size];
    const paddingHorizontal = {
        large: 15,
        medium: 12.5,
        small: 10
    }[size];
    const colorSystem = getContentColorSystem(color);
    const textColor = props.textColor
        || (colorSystem === 'light-content' ? '#ffffff' : '#000000');
    const disabledColor = colorSystem === 'dark-content'
        ? darken(color, 30)
        : lighten(color, 60);
    const activeColor = colorSystem === 'dark-content'
        ? darken(color, 5)
        : darken(color, 10);
    return (<View onPress={onPress} align="center" verticalAlign="middle" color={disabled ? disabledColor : color} activeColor={activeColor} radius={round && 4} style={[
        {
            height,
            paddingHorizontal
        },
        extractBoxStyles(props),
        style
    ]} {...excludeBoxProps(restRrops)}>
      <Text style={{
        color: textColor,
        fontSize: textSize || fontSize,
        fontWeight: bold ? 'bold' : 'normal'
    }}>
        {children}
      </Text>
    </View>);
});
