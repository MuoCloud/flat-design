import React, { memo, useMemo } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
export default memo((props) => {
    const { style, onPress, ...restProps } = props;
    const imageComponent = useMemo(() => (<Image style={[
        {
            backgroundColor: '#eceff1'
        },
        style
    ]} {...restProps}/>), [props]);
    if (onPress) {
        return (<TouchableWithoutFeedback onPress={onPress}>
        {imageComponent}
      </TouchableWithoutFeedback>);
    }
    else {
        return imageComponent;
    }
});
