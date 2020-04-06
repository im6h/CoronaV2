/**
 *  Corona application version 2
 *  @author tjjone98
 *
 */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Containers from './src/Containers/Containers';
import { Provider } from 'mobx-react';
import store from './src/Stores';
const App = () => {
  return (
    <Provider {...store}>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{ flex: 1 }}>
        <Containers />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
