import * as ReactNative from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export function useStyles() {
  const isDarkMode = ReactNative.useColorScheme() === 'dark';

  return ReactNative.StyleSheet.create({
    item: {
      marginTop: 4,
      borderTopColor: isDarkMode ? Colors.light : Colors.dark,
      borderTopWidth: 1,
      padding: 4,
    },
    from: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    fromName: {
      fontWeight: 'bold',
    },
    fromPhone: {
      fontWeight: 'bold',
      fontSize: 10,
      textAlignVertical: 'bottom',
      paddingLeft: 4,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
}
