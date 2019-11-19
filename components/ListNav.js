import React, { memo } from 'react';
import { Text } from 'react-native';
import Icon from './Icon';
import View from './View';
export default memo((props) => {
    const { color = 'black', backgroundColor = '#ffffff', title, onPress, style, ...restProps } = props;
    return (<View onPress={onPress} color={backgroundColor} style={[
        {
            paddingHorizontal: 20,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center'
        },
        style
    ]} {...restProps}>
      <Text style={{
        fontSize: 16,
        color
    }}>
        {title}
      </Text>

      <View style={{ marginLeft: 'auto' }}>
        <Icon name="arrow-ios-forward-outline" color="black" size={20}/>
      </View>
    </View>);
});
