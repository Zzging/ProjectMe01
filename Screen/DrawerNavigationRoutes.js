/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import Navigators
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawerScreens/HomeScreen';
import SettingsScreen from './drawerScreens/SettingsScreen';
import MeatScreen from './drawerScreens/MeatScreen';
import GarnishScreen from './drawerScreens/GarnishScreen';
import FruitScreen from './drawerScreens/FruitScreen';
import VegetableScreen from './drawerScreens/VegetableScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Setting Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});
const MeatActivity_StackNavigator = createStackNavigator({
  First: {
    screen: MeatScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Meat Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});
const FruitActivity_StackNavigator = createStackNavigator({
  First: {
    screen: FruitScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Fruit Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});
const GarnishActivity_StackNavigator = createStackNavigator({
  First: {
    screen: GarnishScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Garnish Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});
const VegetableActivity_StackNavigator = createStackNavigator({
  First: {
    screen: VegetableScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Vegetable Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});

const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },
    SettingsScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Setting Screen',
      },
    },
    MeatScreen: {
      screen: MeatActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Meat Screen',
      },
    },
    GarnishScreen: {
      screen: GarnishActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Fruit Screen',
      },
    },
    FruitScreen: {
      screen: FruitActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Garnish Screen',
      },
    },
    VegetableScreen: {
      screen: VegetableActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Vegetable Screen',
      },
    },

  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);
export default DrawerNavigatorRoutes;
