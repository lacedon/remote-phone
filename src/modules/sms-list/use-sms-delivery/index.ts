import React from 'react';
import { DeviceEventEmitter } from 'react-native';

export function useSMSDelivery() {
  React.useEffect(() => {
    DeviceEventEmitter.addListener('sms_onDelivery', (msg) => {
      console.log(msg);
    });

    return () => DeviceEventEmitter.removeAllListeners('sms_onDelivery');
  });
}
