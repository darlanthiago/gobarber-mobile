import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import AppProviders from './hooks';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <AppProviders>
        <View style={style.view}>
          <Routes />
        </View>
      </AppProviders>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#312e38',
  },
});

export default App;
