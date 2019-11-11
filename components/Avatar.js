import React, { memo, useMemo } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Image from './Image';
export default memo((props) => {
    const { style, onPress, size = 40, source, ...restProps } = props;
    const imageComponent = useMemo(() => (<Image height={size} width={size} source={source} style={[
        {
            borderRadius: size / 2
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
