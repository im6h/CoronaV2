import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
class SplashScreen extends React.Component {
	componentDidMount() {
		setTimeout(() => {
			Actions.replace('launchScreen');
		}, 2000);
	}

	render() {
		return (
			<View>
				<Text>This is splash screen</Text>
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
});
export default SplashScreen;
