import * as React from 'react';
import * as ReactNative from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { SMSList } from '../modules/sms-list';

const App: React.FC = () => {
  const isDarkMode = ReactNative.useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ReactNative.SafeAreaView style={backgroundStyle}>
      <ReactNative.StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ReactNative.ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <SMSList />
      </ReactNative.ScrollView>
    </ReactNative.SafeAreaView>
  );
};

export default App;
