/**
 * React-native Movie App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Test3 extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.symbol}>
                    <Image source={require('../../resources/img/latest/cn.webp')} style={styles.image} />
                    <View>
                        <Text>
                            导演：<Text style={styles.meta}>索分·沙达菲斯</Text>
                        </Text>
                        <Text>
                            编剧: <Text style={styles.meta}>索分·沙达菲斯 / Sopana Chaowiwatkul / Supalerk Ningsanond</Text>
                        </Text>
                        <Text>
                            主演: <Text style={styles.meta}>Numthip Jongrachatawiboon / Apichaya Thongkham / Thunyaphat Pattarateerachaicharoen / Panisara Rikulsurakan / Duentem Salit</Text>
                        </Text>
                        <Text>
                            类型: <Text style={styles.meta}>剧情 / 惊悚 / 恐怖</Text>
                        </Text>
                        <Text>
                            制片国家/地区: <Text style={styles.meta}>泰国</Text>
                        </Text>
                        <Text>
                            语言: <Text style={styles.meta}>泰   语</Text>
                        </Text>
                    </View>
                </View>

                <Text onPress={() => {
                    const {navigate} = this.props.navigation;
                    navigate('Detail1', {
                        headerTitle: '我是修改后的文字'
                    });
                }}>
                   点击可以跳转至-已经在Router.js的StackNavigator中注册过的页面
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    meta: {
      color: '#6435c9'
    },
    image: {
        width: 100,
        height: 124,
    },
    symbol: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    container:{
        flex: 1,
        margin: 8,
/*        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-around',
        alignSelf:'stretch',*/
    }
})