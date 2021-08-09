import React from 'react';
import * as ReactNative from 'react-native';

export function useSMSDelivery() {
  React.useEffect(() => {
    ReactNative.DeviceEventEmitter.addListener('sms_onDelivery', (msg) => {
      console.log(msg);
    });

    return () => ReactNative.DeviceEventEmitter.removeAllListeners('sms_onDelivery');
  });
}
