import React from 'react';
import {Router, Scene, Drawer} from 'react-native-router-flux';
import DrawerComponent from '../Components/DrawerComponent';
import LaunchScreen from '../Screens/LauchScreen/LauchScreen';
import NewScreen from '../Screens/NewScreen/NewScreen';
import NewScreenDetail from '../Screens/NewScreen/NewScreenDetail';
import StatsScreen from '../Screens/StatsScreen/StatsScreen';
import SettingScreen from '../Screens/SettingScreen/SettingScreen';
import Icon from 'react-native-vector-icons/EvilIcons';
import I18n from '../Language/i18n';
const Navigations = () => {
	return (
		<Router>
			<Drawer
				key="drawer"
				contentComponent={DrawerComponent}
				drawerIcon={() => {
					return <Icon name="navicon" size={25} />;
				}}>
				<Scene key="rootScene">
					<Scene
						key="launchScreen"
						component={LaunchScreen}
						title={I18n.t('stats')}
						initial
					/>
					<Scene key="newScreen" component={NewScreen} title={I18n.t('news')} />
					<Scene key="statsScreen" component={StatsScreen} back={true} />
					<Scene
						key="newDetail"
						component={NewScreenDetail}
						hideNavBar={true}
						back={true}
					/>
					<Scene
						key="settingScreen"
						component={SettingScreen}
						title={I18n.t('settings')}
					/>
				</Scene>
			</Drawer>
		</Router>
	);
};
export default Navigations;
