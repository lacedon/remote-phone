import React from 'react';
import * as ReactNative from 'react-native';

import { Text } from '@/components/text';

export const Spinner: React.FC = () => (
  <ReactNative.View style={styles.container}>
    <ReactNative.ActivityIndicator size="large" color="#a0b0f0" />
    <Text style={styles.text}>Loading...</Text>
  </ReactNative.View>
);

const styles = ReactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  text: {
    textAlign: 'center',
  },
});
