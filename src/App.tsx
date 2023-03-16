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

import LoginScreen from './screens/Login';
import ContactScreen from './screens/home/ConTact';
import HomeStack from './screens/home';
import AddContactScreen from './screens/home/AddContact';
import HistoryDetailScreen from './screens/home/HistoryDetail';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

type RootStackParamList = {
  LoginScreen: undefined;
  AddContactScreen: undefined;
  HomeStack: undefined;
  HistoryDetailScreen: undefined;
  // Feed: {sort: 'latest' | 'top'} | undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen
          name="AddContactScreen"
          component={AddContactScreen}
        />
        <RootStack.Screen
          name="HistoryDetailScreen"
          component={HistoryDetailScreen}
        />
        <RootStack.Screen name="HomeStack" component={HomeStack} />
        {/* <RootStack.Screen
          name="SelectApp"
          component={SelectApp}
          // initialParams={{userId: user.id}}
        /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

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
});

export default App;
