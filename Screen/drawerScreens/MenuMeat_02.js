import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    ImageBackgroundComponent,
} from 'react-native';

export default class MenuOptions_01 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Image
                                source={require('../../Image/001_1.jpg')}
                                style={{

                                    // resizeMode: "contain",
                                    height: 300,
                                    width: '100%',
                                }}
                            />

                            <Text style={styles.name}>ร้านพี่เชอร์รี่</Text>
                            <Text>(เนื้อสัตว์) 8.0 กิโลเมตร จากตำแหน่งของคุณ</Text>
                            <Text style={{ color: '#FF0000' }} >(ส่งวัตถุดิบ 20 นาที)</Text>
                        </View>
                    </View>


                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00CC00',
    },
    headerContent: {
        paddingBottom: 30,
        alignItems: 'stretch',
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
        color: '#FFFFFF',
        fontWeight: '600',
    },
    boxDevice: {
        backgroundColor: '#F1C40F',
        width: '100%',
        height: 120,
        marginTop: 10,
        fontSize: 80,

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
