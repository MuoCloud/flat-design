import React, { memo, useEffect, useState } from 'react';
import { Animated } from 'react-native';
export default memo((props) => {
    const { duration = 200, style, children, ...restProps } = props;
    const [opacity] = useState(new Animated.Value(0));
    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration,
            useNativeDriver: true
        }).start();
    }, []);
    return (<Animated.View style={[style, { opacity }]} {...restProps}>
      {children}
    </Animated.View>);
});
