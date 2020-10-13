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
///MenuMeat
import MenuMeat_01 from './drawerScreens/MenuMeat_01';
import MenuMeat_02 from './drawerScreens/MenuMeat_02';
import MenuMeat_03 from './drawerScreens/MenuMeat_03';
///MenuFruit
import MenuFruit_01 from './drawerScreens/MenuFruit_01';
import MenuFruit_02 from './drawerScreens/MenuFruit_02';
import MenuFruit_03 from './drawerScreens/MenuFruit_03';
////MenuVegetdle
import MenuVegetdle_01 from './drawerScreens/MenuVegetdle_01';
import MenuVegetdle_02 from './drawerScreens/MenuVegetdle_02';
import MenuVegetdle_03 from './drawerScreens/MenuVegetdle_03';
////MenuGarnish
import MenuGarnish_01 from './drawerScreens/MenuGarnish_01';
import MenuGarnish_02 from './drawerScreens/MenuGarnish_02';
import MenuGarnish_03 from './drawerScreens/MenuGarnish_03';
///////////
// import PaymentMeat_01 from './drawerScreens/PaymentMeat_01';


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
//////////////////////_MenuMeatเนื้อ_/////////////////////////////
const MenuMeat_01Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuMeat_01,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านป้าแดง',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});
const MenuMeat_02Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuMeat_02,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่เชอร์รี่',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});
const MenuMeat_03Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuMeat_03,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่เขียว',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});
//////////////////////////__MenuFruitผลไม้__//////////////////////////////////////////////////////////////////////////////////////
const MenuFruit_01Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuFruit_01,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่ชมพู่',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});

const MenuFruit_02Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuFruit_02,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่เชอรี่',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});


const MenuFruit_03Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuFruit_03,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่เขียว',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});

//////////////////////__MenuVegetdleผัก__////////////////////////////////////////////////////////////////////////////////

const MenuVegetdle_01Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuVegetdle_01,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่แตง',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});

const MenuVegetdle_02Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuVegetdle_02,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่ไก่',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});

const MenuVegetdle_03Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuVegetdle_03,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่น้ำ',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});
///////////////////////////////////////__Garnishเครื่องปรุง__///////////////////////////////////////////////////////////////////

const MenuGarnish_01Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuGarnish_01,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่ปลา',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});

const MenuGarnish_02Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuGarnish_02,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่ตา',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});
const MenuGarnish_03Activity_StackNavigator = createStackNavigator({
  First: {
    screen: MenuGarnish_03,
    navigationOptions: ({ navigation }) => ({
      title: 'ร้านพี่จันทร์',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#009900',
      },
      headerTintColor: '#fff',
    }),
  },
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// constPaymentMeat_01Activity_StackNavigator = createStackNavigator({
//   First: {
//     screen: PaymentMeat_01,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Payment',
//       headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
//       headerStyle: {
//         backgroundColor: '#009900',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    ///////////////////__MenuMeatเนื้อ__//////////////////////////////
    MenuMeat_01: {
      screen: MenuMeat_01Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuMeat_01',
      },
    },
    MenuMeat_02: {
      screen: MenuMeat_02Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuMeat_02',
      },
    },
    MenuMeat_03: {
      screen: MenuMeat_03Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuMeat_03',
      },
    },
    /////////////////////////__MenuFruitผลไม้__//////////////////////////////////////////////////////////
    MenuFruit_01: {
      screen: MenuFruit_01Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuFruit_01',
      },
    },

    MenuFruit_02: {
      screen: MenuFruit_02Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuFruit_02',
      },
    },

    MenuFruit_03: {
      screen: MenuFruit_03Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuFruit_03',
      },
    },
    //////////////////////__MenuVegetdle__///////////////////////////////////////////////////////////////////
    MenuVegetdle_01: {
      screen: MenuVegetdle_01Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuVegetdle_01',
      },
    },

    MenuVegetdle_02: {
      screen: MenuVegetdle_02Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuVegetdle_02',
      },
    },

    MenuVegetdle_03: {
      screen: MenuVegetdle_03Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuVegetdle_03',
      },
    },
    /////////////////////////__Garnishเครื่องปรุง__////////////////////////////////////////////////////////////////////////////////
    MenuGarnish_01: {
      screen: MenuGarnish_01Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuGarnish_01',
      },
    },
    MenuGarnish_02: {
      screen: MenuGarnish_02Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuGarnish_02',
      },
    },
    MenuGarnish_03: {
      screen: MenuGarnish_03Activity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'MenuGarnish_03',
      },
    },
    ///////*******/
    // PaymentMeat_01: {
    //   screen: PaymentMeat_01Activity_StackNavigator,
    //   navigationOptions: {
    //     drawerLabel: 'PaymentMeat_01',
    //   },
    // },
  },

  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);
export default DrawerNavigatorRoutes;
