/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NativeModules} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

const {CalendarModule} = NativeModules;

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  Animated,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';

const BottomIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  top: 0;
`;
const BottomIconText = styled.Text`
  color: #3a5bb3;
  font-size: 12px;
`;

// import LoginScreen from './src/screens/Login';
import ContactScreen from './ConTact';
import HistoryScreen from './History';
import DrawerTabs from "./DrawerTabs";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type RootStackParamList = {
  Contact: any;
  History: undefined;

  //   HomeStack: undefined;
  // Feed: {sort: 'latest' | 'top'} | undefined;
};
interface renderIconProps {
  routeName: string | undefined;
  selectedTab: string | undefined;
}
const _renderIcon = ({routeName, selectedTab}: renderIconProps) => {
  let icon = '';

  switch (routeName) {
    case 'title1':
      icon = 'ios-home-outline';
      if (selectedTab === routeName) {
        return (
          <BottomIconContainer1>
            <IconAdd
              source={require('../../../assets/bottomIcon/assignment_ind_24px.png')}
            />
            <SelectedText>Danh bạ</SelectedText>
          </BottomIconContainer1>
        );
      } else {
        return (
          <BottomIconContainer1>
            <IconAdd
              source={require('../../../assets/bottomIcon/assignment_ind_24px-disable.png')}
            />
            <NotSelectedText>Danh bạ</NotSelectedText>
          </BottomIconContainer1>
        );
      }
    case 'title2':
      icon = 'settings-outline';
      if (selectedTab === routeName) {
        return (
          <BottomIconContainer1>
            <IconRight
              source={require('../../../assets/bottomIcon/history_icon.png')}
            />
            <SelectedText>Gần đây</SelectedText>
          </BottomIconContainer1>
        );
      } else {
        return (
          <BottomIconContainer1>
            <IconRight
              source={require('../../../assets/bottomIcon/history_icon_disable.png')}
            />
            <NotSelectedText>Gần đây</NotSelectedText>
          </BottomIconContainer1>
        );
      }
  }

  return (
    <Ionicons
      name={icon}
      size={25}
      color={routeName === selectedTab ? 'black' : 'gray'}
    />
  );
};

interface renderTabBarProps {
  routeName: string | undefined;
  selectedTab: string | undefined;
  navigate: any;
}
const renderTabBar = ({
  routeName,
  selectedTab,
  navigate,
}: renderTabBarProps) => {
  return (
    <TouchableOpacity
      onPress={() => navigate(routeName)}
      style={styles.tabbarItem}>
      {_renderIcon({routeName, selectedTab})}
    </TouchableOpacity>
  );
};
const HomeStackNavigator = createBottomTabNavigator<RootStackParamList>();

interface StackProp {
  navigation: any;
}

function HomeStack({navigation}: StackProp): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <CurvedBottomBar.Navigator
      screenOptions={{
        headerShown: false,
      }}
      type="DOWN"
      style={styles.bottomBar}
      // shadowStyle={styles.shawdow}
      height={55}
      circleWidth={50}
      bgColor={'#F2A54A'}
      initialRouteName="title1"
      borderTopLeftRight
      renderCircle={({selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <MiddleIcon
            // style={styles.button}
            onPress={() => navigation.navigate('AddContactScreen')}>
            <IconAdd
              source={require('../../../assets/bottomIcon/add_24px.png')}
            />
          </MiddleIcon>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="title1"
        position="LEFT"
        component={() => <ContactScreen navigation={navigation} />}
      />
      {/*<CurvedBottomBar.Screen*/}
      {/*  name="title5"*/}
      {/*  position="LEFT"*/}
      {/*  component={() => <DrawerTabs navigation={navigation}/>}*/}
      {/*/>*/}
      <CurvedBottomBar.Screen
        name="title2"
        component={() => <HistoryScreen navigation={navigation} />}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}
const IconAdd = styled(Image)`
  /* margin-right: 17px; */
  /* margin-top: 11px; */
`;
// const BottomIconContainer = styled(View``;
const BottomIconContainer1 = styled.View`
  //justify-content: center;
  //align-content: center;
  align-items: center;
  //font-weight: 400;
  //font-size: 10px;
  //line-height: 12px;
  //color: #ffffff;
`;
const MiddleIcon = styled(TouchableOpacity)`
  padding: 20px;
  text-align: center;
  // backgroundColor: 'blue',
  margin: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
`;
const SelectedText = styled.Text`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-top: 3px;
  color: #ffffff;
`;
const NotSelectedText = styled.Text`
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-top: 3px;
  color: #ffdaae;
`;
const IconLeft = styled(Image)`
  /* margin-right: 17px; */
  /* margin-top: 11px; */
`;
const IconRight = styled(Image)`
  /* margin-right: 17px; */
  /* margin-top: 11px; */
`;
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    padding: 20,
    textAlign: 'center',
    // backgroundColor: 'blue',
    margin: 20,
  },
  tabContainer: {alignItems: 'center', justifyContent: 'center', top: 0},
  tabImage: {},
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    bottom: 30,
    shadowColor: '#000',
    boxShadow: 'rgba(0, 0, 0, 0.15)',
    boxShadowBottom: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});

export default HomeStack;
