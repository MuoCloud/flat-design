import React, { memo } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { excludeBoxProps, extractBoxStyles } from '../utils';
export default memo((props) => {
    const { style, onPress, ...restProps } = props;
    const imageComponent = (<Image style={[
        {
            backgroundColor: '#eceff1',
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
