import React from 'react';
import { Text, StyleSheet } from 'react-native';

function renderValue(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return (value as any).toString();
  }
}

export const Debug: React.FC<{ value: unknown }> = ({ value }) => <Text style={styles.text}>{renderValue(value)}</Text>;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'monospace',
  },
});
