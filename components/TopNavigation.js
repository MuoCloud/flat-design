import React, { memo } from 'react';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { TopNavigation } from 'react-native-ui-kitten';
export default memo((props) => {
    const { style, titleStyle, barStyle = 'dark-content', color = '#ffffff', titleColor = 'black', border, ...restProps } = props;
    return (<>
      <StatusBar barStyle={barStyle}/>
      <TopNavigation {...restProps} style={[{
            paddingTop: 11.5 + getStatusBarHeight(true),
            paddingBottom: 11.5,
            backgroundColor: color,
            ...(border && {
                borderBottomColor: border.color,
                borderBottomWidth: border.width
            })
        }, style]} titleStyle={[{
            fontSize: 16,
            lineHeight: 20,
            color: titleColor
        }, titleStyle]}/>
    </>);
});
