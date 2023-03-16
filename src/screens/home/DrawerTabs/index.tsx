import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AllScreen from './AllScreen';

const Drawer = createDrawerNavigator();
interface Props{
  navigation: any;
}
export default function DrawerTabs(props: Props) {
  console.log('hehe: ', props.navigation);
  return (
    <Drawer.Navigator initialRouteName="First">
      <Drawer.Screen name="First" component={AllScreen} />
      <Drawer.Screen name="Second" component={AllScreen} />
      {/*<Drawer.Screen name="Notifications" component={NotificationsScreen} />*/}
    </Drawer.Navigator>
  );
}
