import * as ReactNative from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function useStyles() {
  const isDarkMode = ReactNative.useColorScheme() === 'dark';

  return ReactNative.StyleSheet.create({
    text: {
      color: isDarkMode ? Colors.light : Colors.dark,
    },
  });
}
