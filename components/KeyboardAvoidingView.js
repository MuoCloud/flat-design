import React, { memo } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { extractBoxStyles } from '../utils';
export default memo((props) => {
    const { color = '#ffffff', behavior = 'padding', style, ...restProps } = props;
    return (<KeyboardAvoidingView behavior={behavior} style={[
        {
            backgroundColor: color
        },
        extractBoxStyles(props),
        style
    ]} {...restProps}/>);
});
