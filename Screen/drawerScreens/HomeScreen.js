import React from 'react';
import { ImageBackground, StyleSheet, Button, View, TouchableOpacity, SafeAreaView, Text, Alert } from 'react-native';
const Separator = () => (
  <View style={styles.separator} />
);
const HomeScreen = ({ navigation }) => (
  <View style={styles.mainBody}>
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          style={styles.boxDevice}
          onPress={() => navigation.navigate('MeatScreen')}>
          <View style={{ margin: 10 }}>
            <Text style={styles.boxmenu}>ประเภทเนื้อสัตว์</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boxDevice}
          onPress={() => navigation.navigate('VegetableScreen')}>
          <View style={{ margin: 10 }}>
            <Text style={styles.boxmenu}>ประเภทผัก</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boxDevice}
          onPress={() => navigation.navigate('FruitScreen')}>
          <View style={{ margin: 10 }}>
            <Text style={styles.boxmenu}>ประเภทผลไม้</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boxDevice}
          onPress={() => navigation.navigate('GarnishScreen')}>
          <View style={{ margin: 10 }}>
            <Text style={styles.boxmenu}>เครื่องปรุง</Text>
          </View>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFF66',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,

    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#009900',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  boxDevice: {
    backgroundColor: '#00CC00',
    width: '100%',
    height: 120,
    marginTop: 10,
    fontSize: 80,

  },
  boxmenu: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 30,
    fontSize: 30,
    fontFamily: 'EucrosiaUPC',
    textTransform: "uppercase"

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});
export default HomeScreen;

