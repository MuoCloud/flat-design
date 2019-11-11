import React, { memo, useMemo } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
export default memo((props) => {
    const { style, source, onPress, ...restProps } = props;
    const imageComponent = useMemo(() => (<Image source={source} style={[
        {
            backgroundColor: '#eceff1'
        },
        style
    ]} {...restProps}/>), [source]);
    if (onPress) {
        return (<TouchableWithoutFeedback onPress={onPress}>
        {imageComponent}
      </TouchableWithoutFeedback>);
    }
    else {
        return imageComponent;
    }
});
