import React, { memo, useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { excludeBoxProps, extractBoxStyles } from '../utils';
export default memo((props) => {
    const { flex, duration = 200, style, children, ...restProps } = props;
    const [opacity] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration,
            useNativeDriver: true
        }).start();
    }, []);
    return (<Animated.View style={[
        {
            ...(typeof flex === 'number' && { flex })
        },
        extractBoxStyles(props),
        style,
        { opacity }
    ]} {...excludeBoxProps(restProps)}>
      {children}
    </Animated.View>);
});
