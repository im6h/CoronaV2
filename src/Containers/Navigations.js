import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import DrawerComponent from '../Components/DrawerComponent';
import LaunchScreen from '../Screens/LauchScreen/LauchScreen';
import NewScreen from '../Screens/NewScreen/NewScreen';
import NewScreenDetail from '../Screens/NewScreen/NewScreenDetail';
import StatsScreen from '../Screens/StatsScreen/StatsScreen';
import SettingScreen from '../Screens/SettingScreen/SettingScreen';
import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import Icon from 'react-native-vector-icons/EvilIcons';
import i18n from '../Language/i18n';
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
            <Scene
              key="launchScreen"
              component={LaunchScreen}
              title={i18n.t('stats')}
            />
            <Scene
              initial
              key="newScreen"
              component={NewScreen}
              title={i18n.t('news')}
            />
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
              title={i18n.t('settings')}
            />
          </Scene>
        </Drawer>
      </Router>
    );
  }
}
export default Navigations;
