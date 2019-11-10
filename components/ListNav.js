import React, { memo, useCallback, useState } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Icon from './Icon';
export default memo((props) => {
    const { color = 'black', backgroundColor = '#ffffff', activeBackgroundColor = '#f9f9f9', title, onPress, style = {} } = props;
    const [active, setActive] = useState(false);
    const onPressIn = useCallback(() => setActive(true), []);
    const onPressOut = useCallback(() => setActive(false), []);
    return (<TouchableWithoutFeedback onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <View style={[
        {
            paddingHorizontal: 20,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: active ? activeBackgroundColor : backgroundColor
        },
        style
    ]}>
        <Text style={{
        fontSize: 16,
        color
    }}>
          {title}
        </Text>

        <View style={{ marginLeft: 'auto' }}>
          <Icon name="arrow-ios-forward-outline" color="black" size={20}/>
        </View>
      </View>
    </TouchableWithoutFeedback>);
});
