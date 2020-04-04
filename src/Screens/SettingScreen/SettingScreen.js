import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import fonts from '../../Themes/fonts';
import base from '../../Themes/base';
import IconIonIcon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';
class SettingScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			language: '',
		};
	}
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.language}
					onPress={() => {
						this.setState({
							language: 'English',
						});
					}}>
					<Text style={styles.textTitle}>Language</Text>
					<View style={styles.selected}>
						<Text style={styles.textLanguage}>{this.state.language}</Text>
						<IconIonIcon name="ios-arrow-forward" size={25} />
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 4,
	},
	language: {
		width: '100%',
		height: 60,
		padding: 10,
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
	textTitle: {
		fontSize: fonts.lg,
		fontWeight: 'bold',
	},
	textLanguage: {
		fontSize: fonts.sm,
		fontWeight: '200',
		marginRight: 10,
	},
	selected: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
export default SettingScreen;
