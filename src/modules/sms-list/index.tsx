import React from 'react';
import { View, Text } from 'react-native';

import { Debug } from '@/components/debug';
import { Spinner } from '@/components/spinner';
import { Picker, Option } from '@/components/picker';
import { Paginator } from '@/components/paginator';

import { useSMSList, Boxes } from './use-sms-list';
import { useStorageSignIn } from './use-storage';
import { SMSMessageItem } from './item';
import { styles } from './styles';

export const SMSList: React.FC = () => {
  const { isLoading, itemPerPage, indexFrom, setIndexFrom, box, setBox, count, list, error } = useSMSList();
  const changeBox = React.useCallback((option: Option) => setBox(option.key as Boxes), [setBox]);
  const { userInfo } = useStorageSignIn();

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <Text style={styles.error}>{error.message}</Text>;
  }
  if (!Array.isArray(list)) {
    return <Text style={styles.error}>Cannot get access to the SMS list</Text>;
  }
  return (
    <View>
      <View style={styles.header}>
        <Picker
          options={[
            { key: Boxes.inbox, label: 'Inbox' },
            { key: Boxes.sent, label: 'Sent' },
          ]}
          value={box}
          onChange={changeBox}
        />
        <Text style={styles.title}>({count})</Text>
      </View>

      <Debug value={userInfo} />

      <Paginator value={indexFrom} count={count} itemPerPage={itemPerPage} onChange={setIndexFrom} />

      {list.map((item) => (
        <SMSMessageItem key={item.id} item={item} />
      ))}
    </View>
  );
};
