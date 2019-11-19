import LottieView from 'lottie-react-native';
import React, { useCallback, useState } from 'react';
import AutoHeightImage from 'react-native-auto-height-image';
import imageLoading from '../assets/lottie/image_loading.json';
import { excludeBoxProps, extractBoxStyles } from '../utils';
import View from './View';
export default (props) => {
    const { onPress, onHeightChange, style, ...restProps } = props;
    const [loaded, setLoaded] = useState(false);
    const onHeightChangeHandler = useCallback((height) => {
        if (!loaded && height > 0) {
            setLoaded(true);
        }
        if (onHeightChange) {
            onHeightChange(height);
        }
    }, [loaded]);
    return (<View onPress={onPress} style={[
        { backgroundColor: '#eceff1' },
        extractBoxStyles(props),
        style
    ]}>
      {!loaded && (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LottieView style={{
        width: 150,
        height: 150
    }} autoPlay={true} source={imageLoading}/>
          </View>)}

      <AutoHeightImage onHeightChange={onHeightChangeHandler} {...excludeBoxProps(restProps)}/>
    </View>);
};
