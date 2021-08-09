import * as React from 'react';
import * as ReactNative from 'react-native';

import { useStyles } from './use-styles';

export const Text: React.FC<ReactNative.TextProps> = ({ style, ...props }) => {
  const styles = useStyles();

  return <ReactNative.Text style={[style, styles.text]} {...props} />;
};
