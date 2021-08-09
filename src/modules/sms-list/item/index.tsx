import React from 'react';
import { View, Text } from 'react-native';

import { Item } from '../use-sms-list';
import { useStyles } from './styles';

export const SMSMessageItem: React.FC<{ item: Item }> = ({ item }) => {
  const styles = useStyles();

  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <View style={styles.from}>
          <Text style={styles.fromName}>{item.personId ? item.personId : item.address}</Text>
          {item.personId ? <Text style={styles.fromPhone}>({item.address})</Text> : null}
        </View>

        <Text style={styles.date}>
          {item.date.toDateString()} {item.date.toTimeString().slice(0, 8)}
        </Text>
      </View>
      <Text style={styles.message}>{item.body}</Text>
    </View>
  );
};
