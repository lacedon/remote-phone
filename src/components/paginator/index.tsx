import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

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
    <View style={styles.paginator}>
      <Button disabled={value <= firstPage} onPress={decrease} title="Back" />
      <Text>{page + 1}</Text>
      <Button disabled={typeof lastPage === 'number' && page >= lastPage} onPress={increase} title="Forward" />
    </View>
  );
};

const styles = StyleSheet.create({
  paginator: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
