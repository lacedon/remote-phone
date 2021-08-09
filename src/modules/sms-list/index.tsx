import React from 'react';
import ReactNative from 'react-native';

import { Spinner } from '@/components/spinner';
import { Picker, Option } from '@/components/picker';
import { Paginator } from '@/components/paginator';
import { Text } from '@/components/text';
import { useError } from '@/hooks/use-error';

import { useSMSList, Boxes } from './use-sms-list';
import { useStorageSignIn } from './use-storage';
import { SMSMessageItem } from './item';
import { SMSListHeader } from './header';
import { styles } from './styles';

export const SMSList: React.FC = () => {
  const {
    isLoading,
    itemPerPage,
    indexFrom,
    setIndexFrom,
    box,
    setBox,
    count,
    list,
    error: smsListError,
  } = useSMSList();
  const changeBox = React.useCallback((option: Option) => setBox(option.key as Boxes), [setBox]);
  const { userInfo, error: signInError } = useStorageSignIn();
  const error = useError(smsListError, signInError);

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
    <ReactNative.View>
      <SMSListHeader
        start={
          <Picker
            options={[
              { key: Boxes.inbox, label: 'Inbox' },
              { key: Boxes.sent, label: 'Sent' },
            ]}
            value={box}
            onChange={changeBox}
          />
        }
        count={count}
        userName={userInfo?.user.name}
      />

      {list.map((item) => (
        <SMSMessageItem key={item.id} item={item} />
      ))}

      <Paginator value={indexFrom} count={count} itemPerPage={itemPerPage} onChange={setIndexFrom} />
    </ReactNative.View>
  );
};
