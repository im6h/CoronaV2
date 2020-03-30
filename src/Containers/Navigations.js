import React from 'react';
import {Router, Scene, Drawer} from 'react-native-router-flux';
import LaunchScreen from '../Screens/LauchScreen/LauchScreen';
import Icon from 'react-native-vector-icons/EvilIcons';
const Navigations = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Drawer
          key="drawer"
          drawerIcon={() => {
            return <Icon name="navicon" size={25} />;
          }}>
          <Scene
            key="launchScreen"
            initial
            component={LaunchScreen}
            navTransparent={true}
          />
        </Drawer>
      </Scene>
    </Router>
  );
};
export default Navigations;
