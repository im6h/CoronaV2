import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import DrawerComponent from '../Components/DrawerComponent';
import LaunchScreen from '../Screens/LauchScreen/LauchScreen';
import NewScreen from '../Screens/NewScreen/NewScreen';
import NewScreenDetail from '../Screens/NewScreen/NewScreenDetail';
import StatsScreen from '../Screens/StatsScreen/StatsScreen';
import SettingScreen from '../Screens/SettingScreen/SettingScreen';
import Icon from 'react-native-vector-icons/EvilIcons';
class Navigations extends React.Component {
	render() {
		return (
			<Router>
				<Drawer
					key="drawer"
					contentComponent={DrawerComponent}
					drawerIcon={() => {
						return <Icon name="navicon" size={25} />;
					}}>
					<Scene key="root">
						<Scene initial key="launchScreen" component={LaunchScreen} />
						<Scene key="newScreen" component={NewScreen} />
						<Scene key="statsScreen" component={StatsScreen} back={true} />
						<Scene
							key="newDetail"
							component={NewScreenDetail}
							hideNavBar={true}
							back={true}
						/>
						<Scene key="settingScreen" component={SettingScreen} />
					</Scene>
				</Drawer>
			</Router>
		);
	}
}
export default Navigations;
