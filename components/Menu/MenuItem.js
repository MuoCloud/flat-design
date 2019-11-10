import React, { memo, useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from '../Icon';
const styles = StyleSheet.create({
    container: {
        height: 54,
        alignItems: 'center',
        maxWidth: 248,
        minWidth: 124,
        flexDirection: 'row',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 14.5,
        textAlign: 'left',
    },
});
export default memo((props) => {
    const { children, disabled = false, disabledTextColor = '#bdbdbd', onPress, style, textStyle, icon, ...restProps } = props;
    const [active, setActive] = useState(false);
    const onPressIn = useCallback(() => setActive(true), []);
    const onPressOut = useCallback(() => setActive(false), []);
    return (<TouchableWithoutFeedback disabled={disabled} onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut} {...restProps}>
      <View style={[
        styles.container,
        {
            backgroundColor: active ? '#f9f9f9' : 'transparent'
        },
        style
    ]}>
        {icon && (<View style={{ width: 27.5 }}>
              <Icon name={icon} size={18} color="black"/>
            </View>)}
        <Text numberOfLines={1} style={[
        styles.title,
        disabled && { color: disabledTextColor },
        textStyle,
    ]}>
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>);
});
