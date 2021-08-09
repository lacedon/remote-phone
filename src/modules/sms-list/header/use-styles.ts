import * as React from 'react';
import * as ReactNative from 'react-native';

export function useStyles() {
  return React.useMemo(
    () =>
      ReactNative.StyleSheet.create({
        header: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        title: {
          fontSize: 20,
          fontWeight: 'bold',
          padding: 4,
          marginBottom: 8,
        },
        action: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        user: {},
      }),
    [],
  );
}
