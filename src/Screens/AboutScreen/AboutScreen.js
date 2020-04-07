import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import fonts from '../../Themes/fonts';
import i18n from '../../Language/i18n';
class AboutScreen extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logo}>
					<Image
						style={styles.image}
						source={require('../../Image/logo.png')}
					/>
				</View>
				<View style={styles.content}>
					<Text style={styles.about}>{i18n.t('aboutCoronaTracker')}</Text>
					<Text style={styles.aboutContent}>{i18n.t('aboutContent')}</Text>
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 8,
	},
	image: {
		height: 100,
		width: 100,
	},
	logo: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		flex: 8,
		alignItems: 'center',
	},
	about: {
		fontSize: fonts.xl,
		fontWeight: 'bold',
		marginBottom: 8,
	},
	aboutContent: {
		fontSize: fonts.md,
		fontWeight: '400',
		marginLeft: 4,
		marginRight: 4,
	},
});
export default AboutScreen;
