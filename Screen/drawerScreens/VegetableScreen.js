import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ImageBackgroundComponent,
    TouchableOpacity,
    navigation,
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFF66',
    },
    // mainBody: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   backgroundColor: '#FFFF66',
    // },


    // header: {
    //   backgroundColor: '#FFCC00',
    //   // backgroundColor: 'red',
    // },
    headerContent: {
        padding: 30,
        alignItems: 'center',
        backgroundColor: '#FFFFCC',
    },
    avatar: {
        width: 300,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
    },
    name: {
        fontSize: 30,
        color: '#003333',
        fontWeight: '600',
        alignSelf: 'center',
        margin: 10,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    textInfo: {
        fontSize: 18,
        marginTop: 20,
        color: '#696969',
    },
    bodyContent: {
        paddingTop: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    menuBox: {
        backgroundColor: '#DCDCDC',
        width: 300,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 12,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {
            height: 2,
            width: -2,
        },
        elevation: 4,
    },
    icon: {
        width: 60,
        height: 60,
    },
    info: {
        fontSize: 24,
        color: '#696969',
    },
    position: {
        fontSize: 14,
        color: '#D35400',
    },
});

const VegetableScreen = ({ navigation }) => (
    this.state = {
        images: [
            require('../../Image/Vegetable01.jpg'),
            require('../../Image/Vegetable02.jpg'),
            require('../../Image/Vegetable03.jpg')
        ]
    },
    < ScrollView >
        <View style={styles.container}>

            <View style={styles.header}>
                <View>
                    <SliderBox
                        autoplay={true}
                        images={this.state.images}
                    />
                </View>
                {/* <View style={styles.headerContent}>
                  <Image
                    source={require('../../Image/001.jpg')}
                    style={{
                      width: 400,
                      height: 300,
                      margin: 0,
                    }}
                  />
                </View> */}
                <Text style={styles.info}>ร้านค้าทั้งหมด</Text>

                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <View style={{ padding: 10 }}>

                            <TouchableOpacity
                                style={styles.boxDevice}
                                onPress={() => navigation.navigate('MenuVegetdle_01')}>
                                <Image
                                    source={require('../../Image/002_1.jpg')}
                                    style={{
                                        width: 400,
                                        height: 200,
                                        resizeMode: 'contain',
                                        margin: 2,
                                    }}
                                />
                                <Text style={styles.info}>แตง-ตลาดสดท่าศาลา</Text>
                                <Text style={styles.position}>
                                    (ผัก) 8.0 กิโลเมตร จากตำแหน่งของคุณ
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <View style={{ padding: 10 }}>

                            <TouchableOpacity
                                style={styles.boxDevice}
                                onPress={() => navigation.navigate('MenuVegetdle_02')}>
                                <Image
                                    source={require('../../Image/002_2.jpg')}
                                    style={{
                                        width: 400,
                                        height: 200,
                                        resizeMode: 'contain',
                                        margin: 2,
                                    }}
                                />
                                <Text style={styles.info}>พี่ไก่-ตลาดสดท่าศาลา</Text>
                                <Text style={styles.position}>
                                    (ผัก) 8.0 กิโลเมตร จากตำแหน่งของคุณ
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <View style={{ padding: 10 }}>

                            <TouchableOpacity
                                style={styles.boxDevice}
                                onPress={() => navigation.navigate('MenuVegetdle_03')}>
                                <Image
                                    source={require('../../Image/002_3.jpg')}
                                    style={{
                                        width: 400,
                                        height: 200,
                                        resizeMode: 'contain',
                                        margin: 2,
                                    }}
                                />
                                <Text style={styles.info}>พี่น้ำ-ตลาดสดท่าศาลา</Text>
                                <Text style={styles.position}>
                                    (ผัก) 8.0 กิโลเมตร จากตำแหน่งของคุณ
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView >

);

export default VegetableScreen;