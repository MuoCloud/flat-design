import React, { memo, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { getContentColorSystem } from '../utils';
import NavbarAction from './NavbarAction';
import Text from './Text';
import View from './View';
export default memo((props) => {
    const { color = '#ffffff', borderColor = '#eceff1', border = true, height = 43, style, title = '', titleStyle, textSize = 16, leftControls, rightControls, back, onBack } = props;
    const contentColorSystem = color !== 'transparent'
        ? getContentColorSystem(color)
        : 'light-content';
    const barStyle = props.barStyle || contentColorSystem;
    const textColor = props.textColor ||
        (contentColorSystem === 'dark-content' ? '#000000' : '#ffffff');
    const controlProps = {
        color: textColor,
        height,
        size: textSize
    };
    const makeControls = useCallback((controls) => {
        const statelessControls = typeof controls === 'function'
            ? controls(controlProps)
            : controls;
        return statelessControls;
    }, [props]);
    return (<View color={color} verticalAlign="bottom" style={[
        {
            paddingTop: getStatusBarHeight(true),
            ...(border && {
                borderBottomWidth: 1,
                borderBottomColor: borderColor
            })
        },
        style
    ]}>
      <StatusBar barStyle={barStyle}/>

      <View row={true} verticalAlign="middle" style={{
        height,
        paddingHorizontal: 8
    }}>
        <View row={true} verticalAlign="middle">
          {back && (<NavbarAction icon="arrow-ios-back-outline" onPress={onBack} {...controlProps}/>)}

          {leftControls && makeControls(leftControls)}
        </View>

        <Text color={textColor} size={textSize} lineHeight={height} bold={true} style={[
        {
            marginLeft: 8,
            height
        },
        titleStyle
    ]} children={title}/>

        <View row={true} verticalAlign="middle" style={{ marginLeft: 'auto' }}>
          {rightControls && makeControls(rightControls)}
        </View>
      </View>
    </View>);
});
