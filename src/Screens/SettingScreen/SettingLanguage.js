import React from 'react';
import {View, Text, Picker, StyleSheet} from 'react-native';

class SettingLanguage extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Picker
					mode="dialog"
					selectedValue={selectedValue}
					style={{height: 50, width: 150}}
					onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
					<Picker.Item label="Java" value="Java" />
					<Picker.Item label="JavaScript" value="JavaScript" />
				</Picker>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
