import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import {Actions} from 'react-native-router-flux';

const DrawerComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          Actions.launchScreen({});
        }}>
        <View style={styles.action}>
          <IconIonicons style={styles.iconTab} name="ios-stats" size={25} />
          <Text style={styles.nameTab}>Stats</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          Actions.newScreen({});
        }}>
        <View style={styles.action}>
          <IconEntypo style={styles.iconTab} name="news" size={25} />
          <Text style={styles.nameTab}>News</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          Actions.alertScreen({});
        }}>
        <View style={styles.action}>
          <IconFeather style={styles.iconTab} name="alert-circle" size={25} />
          <Text style={styles.nameTab}>Stats</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
  },
  tab: {
    width: 250,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  iconTab: {
    flex: 1,
  },
  nameTab: {
    flex: 8,
    marginLeft: 10,
  },
});
export default DrawerComponent;