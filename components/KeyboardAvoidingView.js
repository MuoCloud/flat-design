import React, { memo } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { extractBoxStyles } from '../utils';
export default memo((props) => {
    const { color = '#ffffff', style, ...restProps } = props;
    return (<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={[
        {
            backgroundColor: color
        },
        extractBoxStyles(props),
        style
    ]} {...restProps}/>);
});
