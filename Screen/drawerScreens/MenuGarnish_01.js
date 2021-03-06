import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    Checkbox,
    ImageBackgroundComponent,
    FlatList,
} from 'react-native';
import Hr from '../Components/hr';
import { CheckBox } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements';
export default class MenuOptions_01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_salse: 10,
        }
    }
    componentDidMount() {
        var api =
            'http://192.168.43.236/API/get_meat_id.php?id=' +
            this.state.id_salse;
        return fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ data: responseJson });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Image
                                source={require('../../Image/004_1.jpg')}
                                style={{

                                    // resizeMode: "contain",
                                    height: 300,
                                    width: '100%',
                                }}
                            />

                            <Text style={styles.name}>ร้านพี่ปลา</Text>
                            <Text>(เครื่องปรุง) 8.0 กิโลเมตร จากตำแหน่งของคุณ</Text>
                            <Text style={{ color: '#FF0000' }} >(ส่งวัตถุดิบ 20 นาที)</Text>
                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontSize: 30 }}>รายการ</Text>
                    </View>
                    <SafeAreaView style={{ flex: 1 }}>
                        <FlatList
                            data={this.state.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <View style={{ flex: 1, margin: 10, padding: 5 }}>
                                    <Text style={{ marginLeft: 10, fontSize: 20, marginBottom: 10 }}>{item.Name_goods}</Text>
                                    <Text style={{ marginLeft: 10, fontSize: 16, marginBottom: 20 }}><Text style={{ fontWeight: "bold" }}> ฿ </Text> {item.Price} บาท / {item.Unit}</Text>
                                    {/* <View style={{ margin: 10 }}>
                                        <CheckBox
                                            center
                                            title='Click Here to Remove This Item'
                                            iconRight
                                            iconType='material'
                                            checkedIcon='clear'
                                            uncheckedIcon='add'
                                            checkedColor='red'
                                            checked={this.state.checked}
                                        />
                                    </View> */}
                                    <Hr />
                                </View>
                            )}
                        />
                    </SafeAreaView>
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
