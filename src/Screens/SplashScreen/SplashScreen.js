import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import fonts from '../../Themes/fonts';
import colors from '../../Themes/colors';
class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      Actions.replace('launchScreen');
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../Image/logo.png')} />
        <Text style={styles.corona}>
          Corona
          <Text style={styles.tracker}>Tracker</Text>
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 10,
  },
  corona: {
    color: colors.green,
    fontSize: fonts.xl,
    fontWeight: 'bold',
  },
  tracker: {
    color: colors.red,
    fontWeight: 'bold',
    fontSize: fonts.xl,
  },
});
export default SplashScreen;
