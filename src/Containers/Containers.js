import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navigations from './Navigations';
const Containers = () => {
  return (
    <View style={styles.container}>
      <Navigations />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Containers;
