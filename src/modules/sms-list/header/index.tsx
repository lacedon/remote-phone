import React from 'react';
import ReactNative from 'react-native';

import { Text } from '@/components/text';

import { useStyles } from './use-styles';

export const SMSListHeader: React.FC<{
  start?: React.ReactNode;
  count?: number;
  userName?: string | null | void;
}> = ({ start, count, userName }) => {
  const styles = useStyles();

  return (
    <ReactNative.View style={styles.header}>
      <ReactNative.View style={styles.action}>
        {start}
        {typeof count === 'number' && !Number.isNaN(count) ? <Text style={styles.title}>({count})</Text> : null}
      </ReactNative.View>

      <ReactNative.View style={styles.user}>{userName ? <Text>{userName}</Text> : null}</ReactNative.View>
    </ReactNative.View>
  );
};
