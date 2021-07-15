import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Spinner: React.FC = () => (
  <View>
    <Text style={styles.text}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    padding: 8,
  },
});
