/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import {View, Text} from 'react-native';

const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
      <Text style={{fontSize: 23, marginTop: 10}}> </Text>
      <Text style={{fontSize: 18, marginTop: 10}}></Text>
      <Text style={{fontSize: 18, marginTop: 10}}></Text>
    </View>
  );
};
export default HomeScreen;