import React, { forwardRef, memo } from 'react';
import { Platform, TextInput } from 'react-native';
import { excludeBoxProps, extractBoxStyles } from '../utils';
export default memo(forwardRef((props, ref) => {
    const { style, useSingleLinePadding, border, borderColor = '#eceff1', placeholderTextColor = '#a6b0c3', multiline, ...restRrops } = props;
    return (<TextInput ref={ref} style={[
        {
            ...(border && {
                borderWidth: 1,
                borderColor,
                borderRadius: 4
            }),
            paddingHorizontal: 12.5,
            ...Platform.select({
                android: {
                    ...((multiline && !useSingleLinePadding) ? {
                        paddingTop: 10,
                        paddingBottom: 10
                    } : {
                        paddingTop: 7.5,
                        paddingBottom: 7.5
                    })
                },
                ios: {
                    paddingTop: 12.5,
                    paddingBottom: 12.5
                }
            }),
        },
        extractBoxStyles(props),
        style
    ]} multiline={multiline} {...excludeBoxProps(restRrops)}/>);
}));
