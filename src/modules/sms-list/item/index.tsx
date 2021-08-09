import React from 'react';
import * as ReactNative from 'react-native';

import { Text } from '@/components/text';

import { Item } from '../use-sms-list';
import { useStyles } from './styles';

export const SMSMessageItem: React.FC<{ item: Item }> = ({ item }) => {
  const styles = useStyles();

  return (
    <ReactNative.View style={styles.item}>
      <ReactNative.View style={styles.header}>
        <ReactNative.View style={styles.from}>
          <Text style={styles.fromName}>{item.personId ? item.personId : item.address}</Text>
          {item.personId ? <Text style={styles.fromPhone}>({item.address})</Text> : null}
        </ReactNative.View>

        <Text>
          {item.date.toDateString()} {item.date.toTimeString().slice(0, 8)}
        </Text>
      </ReactNative.View>
      <Text>{item.body}</Text>
    </ReactNative.View>
  );
};
