import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { extractBoxStyles } from '../utils';
export default memo((props) => {
    const { size = 20, color = 'black', name, pack = 'eva', onPress, style } = props;
    const finalStyle = {
        ...(!onPress && extractBoxStyles(props)),
        ...style
    };
    const iconComponent = (() => {
        if (pack === 'eva') {
            return <Icon style={finalStyle} name={name} height={size} width={size} fill={color}/>;
        }
        else if (pack === 'ion') {
            return <Ionicons style={finalStyle} name={name} size={size} color={color}/>;
        }
        else if (pack === 'md') {
            return <MaterialCommunityIcons style={finalStyle} name={name} size={size} color={color}/>;
        }
    })();
    if (onPress) {
        return (<TouchableOpacity onPress={onPress} activeOpacity={0.8} style={extractBoxStyles(props)}>
        {iconComponent}
      </TouchableOpacity>);
    }
    else {
        return iconComponent;
    }
});
