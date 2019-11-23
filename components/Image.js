import React, { memo } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { excludeBoxProps, extractBoxStyles } from '../utils';
export default memo((props) => {
    const { backgroundColor = '#eceff1', width, height, style, onPress, ...restProps } = props;
    const imageComponent = (<Image style={[
        {
            backgroundColor,
            width,
            height
        },
        extractBoxStyles(props),
        style
    ]} {...excludeBoxProps(restProps)}/>);
    if (onPress) {
        return (<TouchableWithoutFeedback onPress={onPress}>
        {imageComponent}
      </TouchableWithoutFeedback>);
    }
    else {
        return imageComponent;
    }
});
