import * as React from 'react';
import * as ReactNative from 'react-native';

export function useStyles() {
  return React.useMemo(
    () =>
      ReactNative.StyleSheet.create({
        text: {
          fontFamily: 'monospace',
        },
      }),
    [],
  );
}
