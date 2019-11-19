import React, { memo } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
export default memo((props) => {
    const { style, flex, children } = props;
    return (<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={[
        {
            ...(typeof flex === 'number' && { flex })
        },
        style
    ]}>
      {children}
    </KeyboardAvoidingView>);
});
