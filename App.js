/**
 *  Corona application version 2
 *  @author tjjone98
 *
 */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Containers from './src/Containers/Containers';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={{flex: 1}}>
        <Containers />
      </SafeAreaView>
    </>
  );
};

export default App;
