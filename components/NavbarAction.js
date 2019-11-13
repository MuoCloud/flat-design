import React, { memo } from 'react';
import Icon from './Icon';
import View from './View';
export default memo((props) => {
    const { icon, color = '#000000', activeColor = 'rgba(0, 0, 0, .03)', size = 16, height = 40, onPress } = props;
    return (<View align="center" verticalAlign="middle" style={{
        height,
        width: height
    }}>
      <View onPress={onPress} activeColor={activeColor} align="center" verticalAlign="middle" style={{
        height: height - 7,
        width: height - 7,
        borderRadius: (height - 7) / 2
    }}>
        <Icon name={icon} size={size + 4} color={color}/>
      </View>
    </View>);
});
