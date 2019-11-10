import React, { memo } from 'react';
import { TopNavigationAction } from 'react-native-ui-kitten';
import Icon from './Icon';
export default memo((props) => {
    const { color = 'black', icon, style, onPress } = props;
    return (<TopNavigationAction activeOpacity={0.8} icon={iconStyle => <Icon style={iconStyle} color={color} name={icon}/>} style={style} onPress={onPress}/>);
});
