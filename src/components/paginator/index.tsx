import React from 'react';
import * as ReactNative from 'react-native';

import { Text } from '@/components/text';

export const Paginator: React.FC<{
  value?: number;
  firstPage?: number;
  itemPerPage?: number;
  count?: number | null;
  onChange: (value: number) => unknown;
}> = ({ value = 0, firstPage = 0, itemPerPage = 10, count = null, onChange }) => {
  const increase = React.useCallback(() => onChange(value + itemPerPage), [value, onChange, itemPerPage]);
  const decrease = React.useCallback(
    () => onChange(Math.max(value - itemPerPage, firstPage)),
    [value, onChange, itemPerPage, firstPage],
  );
  const page = Math.floor(value / itemPerPage);
  const lastPage = typeof count === 'number' ? Math.floor(count / itemPerPage) : null;

  return (
    <ReactNative.View style={styles.paginator}>
      <ReactNative.Button disabled={value <= firstPage} onPress={decrease} title="Back" />
      <Text>{page + 1}</Text>
      <ReactNative.Button
        disabled={typeof lastPage === 'number' && page >= lastPage}
        onPress={increase}
        title="Forward"
      />
    </ReactNative.View>
  );
};

const styles = ReactNative.StyleSheet.create({
  paginator: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
