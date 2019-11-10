import React, { forwardRef, memo, useCallback, useImperativeHandle, useMemo, useState } from 'react';
import { Platform, TouchableWithoutFeedback, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Modal from '../Modal';
import Portal from '../Portal';
export default memo(forwardRef((props, ref) => {
    const { renderItem, children, position = 'top-right' } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const show = useCallback(() => {
        setModalVisible(true);
    }, []);
    const hide = useCallback(() => {
        setModalVisible(false);
    }, []);
    const positionStyle = useMemo(() => {
        if (position === 'top-right') {
            return {
                alignItems: 'flex-end',
                justifyContent: 'flex-start'
            };
        }
        else if (position === 'top-left') {
            return {
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
            };
        }
        else if (position === 'bottom-right') {
            return {
                alignItems: 'flex-end',
                justifyContent: 'flex-end'
            };
        }
        else if (position === 'bottom-left') {
            return {
                alignItems: 'flex-start',
                justifyContent: 'flex-end'
            };
        }
    }, []);
    useImperativeHandle(ref, () => ({
        show,
        hide
    }));
    return (<View ref={this.setContainerRef} collapsable={false}>
      <View>{renderItem}</View>

      <Portal>
        <Modal visible={modalVisible} onDismiss={hide} contentContainerStyle={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? getStatusBarHeight() : 0
    }}>
          <TouchableWithoutFeedback onPress={hide}>
            <View style={[{ flex: 1 }, positionStyle]}>
              <View style={{
        backgroundColor: 'white',
        borderRadius: 4,
        margin: 10,
        overflow: 'hidden'
    }}>
                {children}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </Portal>
    </View>);
}));
