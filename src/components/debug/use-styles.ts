import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function useStyles() {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? Colors.light : Colors.dark;

  return StyleSheet.create({
    text: {
      fontFamily: 'monospace',
      color: textColor,
    },
  });
}
