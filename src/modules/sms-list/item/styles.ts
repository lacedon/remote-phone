import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function useStyles() {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? Colors.light : Colors.dark;

  return StyleSheet.create({
    item: {
      marginTop: 4,
      borderTopColor: textColor,
      borderTopWidth: 1,
      padding: 4,
    },
    from: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    fromName: {
      fontWeight: 'bold',
      color: textColor,
    },
    fromPhone: {
      fontWeight: 'bold',
      fontSize: 10,
      textAlignVertical: 'bottom',
      paddingLeft: 4,
      color: textColor,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    date: {
      color: textColor,
    },
    message: {
      color: textColor,
    },
  });
}
