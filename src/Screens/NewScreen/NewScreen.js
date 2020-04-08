import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	BackHandler,
	ToastAndroid,
} from 'react-native';
import NewItem from './NewItem';
import { inject, observer } from 'mobx-react';
import colors from '../../Themes/colors';
import { Actions } from 'react-native-router-flux';
import i18n from '../../Language/i18n';
@inject('newStore')
@observer
class NewScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			offset: 0,
			page: 1,
		};
	}
	async componentDidMount() {
		await this.fetchListNews();
		this.BackHandler = BackHandler.addEventListener(
			'hardwareBackPress',
			this.backAction,
		);
	}

	/**
	 * function support
	 */
	backAction = () => {
		if (Actions.currentScene === 'newScreen') {
			if (this.state.doubleBackToExitPressedOnce) {
				BackHandler.exitApp();
			} else {
				ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
				this.setState({ doubleBackToExitPressedOnce: true });
				setTimeout(() => {
					this.setState({ doubleBackToExitPressedOnce: false });
				}, 2000);
			}
			return true;
		} else {
			console.log(Actions.currentScene);
			return false;
		}
	};
	fetchListNews = async () => {
		this.props.newStore.getListNews(this.state.offset, 'vi').then(() => {
			this.setState({
				isLoading: false,
			});
		});
	};
	loadPreNews = async () => {
		this.setState({
			isLoading: false,
			offset: this.state.offset - 9,
		});
		this.props.newStore.getListNews(this.state.offset - 9, 'vi').then(() => {
			this.setState({
				isLoading: false,
				page: this.state.page - 1,
			});
		});
	};
	loadNextNews = async () => {
		this.setState({
			isLoading: true,
			offset: this.state.offset + 9,
		});
		this.props.newStore.getListNews(this.state.offset + 9, 'vi').then(() => {
			this.setState({
				isLoading: false,
				page: this.state.page + 1,
			});
		});
	};

	/**
	 * render view
	 */
	renderFooter = () => {
		if (this.state.page === 1) {
			return (
				<View style={styles.footer}>
					<TouchableOpacity
						style={[styles.button, [{ borderColor: 'transparent' }]]}
						onPress={async () => {
							await this.loadPreNews();
						}}>
						<Text>{''}</Text>
					</TouchableOpacity>
					<Text>{this.state.page}</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={async () => {
							await this.loadNextNews();
						}}>
						<Text style={styles.action}>{i18n.t('next')}</Text>
					</TouchableOpacity>
				</View>
			);
		} else {
			return (
				<View style={styles.footer}>
					<TouchableOpacity
						style={styles.button}
						onPress={async () => {
							await this.loadPreNews();
						}}>
						<Text style={styles.action}>{i18n.t('previous')}</Text>
					</TouchableOpacity>
					<Text>{this.state.page}</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={async () => {
							await this.loadNextNews();
						}}>
						<Text style={styles.action}>{i18n.t('next')}</Text>
					</TouchableOpacity>
				</View>
			);
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					onRefresh={() => {}}
					refreshing={this.state.isLoading}
					extraData={this.props.newStore.listNews}
					ListFooterComponent={this.renderFooter()}
					keyExtractor={({ item }, index) => index.toString()}
					data={this.props.newStore.listNews}
					renderItem={({ item }) => {
						return <NewItem item={item} />;
					}}
				/>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: 5,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 4,
	},
	action: {
		color: colors.blue,
		textDecorationLine: 'underline',
	},
});
export default NewScreen;
