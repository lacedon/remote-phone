import React from 'react';

import { Text } from '@/components/text';

import { useStyles } from './use-styles';

function renderValue(value: unknown): string {
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return (value as any).toString();
  }
}

export const Debug: React.FC<{ value: unknown }> = ({ value }) => {
  const styles = useStyles();
  return <Text style={styles.text}>{renderValue(value)}</Text>;
};
