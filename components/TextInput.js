import React, { forwardRef, memo } from 'react';
import { Platform, TextInput } from 'react-native';
export default memo(forwardRef((props, ref) => {
    const { style, useSingleLinePadding, multiline, ...restRrops } = props;
    return (<TextInput ref={ref} style={[
        {
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
            })
        },
        style
    ]} multiline={multiline} {...restRrops}/>);
}));
