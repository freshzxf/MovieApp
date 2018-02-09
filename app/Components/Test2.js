/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    // DeviceEventEmitter
} from 'react-native';

// const GankIcon = require('../../resources/img/Gank.png');
// const ShiTuIcon = require('../../resources/img/ShiTu.png');

//let badgeNumber = 11;

// function bar(func = () => foo) {
//     let foo = 'inner';
//     console.log(func());
// }

export default class Test2 extends Component {
    // 配置navigation
    // static navigationOptions = ({navigation, screenProps}) => ({
    //     // 这里面的属性和App.js的navigationOptions是一样的。
    //     // 下面就是文章中修改主题色的方法
    //     headerStyle: {backgroundColor: screenProps ? screenProps.themeColor : '#4ECBFC'},
    //     headerTitle: navigation.state.params ? navigation.state.params.headerTitle : 'Test2',
    //     tabBarLabel: navigation.state.params ? navigation.state.params.tabBarLabel : 'Test2',
    //     tabBarIcon: (({tintColor, focused}) => {
    //         if (focused) {
    //             // 做操作
    //         }
    //         return (
    //             <Image
    //                 // 可以用过判断focused来修改选中图片和默认图片
    //                 source={!focused ? ShiTuIcon : GankIcon}
    //                 // 如果想要图标原来的样子可以去掉tintColor
    //                 style={[{height: 35, width: 35}]}
    //             />
    //         )
    //     }),
    //     headerRight: (
    //         <Text style={{color: 'red', marginRight: 20}}
    //               onPress={() => navigation.state.params.navigatePress()}>我的</Text>
    //     ),
        // tabBarOnPress: (obj) => {
        //     console.log(obj);
        //
        //     navigation.state.params.tabBarOnPress()
        //
        //     obj.jumpToIndex(obj.scene.index)
        // },
    //})

    // // 组件将要移除时
    // componentWillUnmount() {
    //     this.subscription.remove();
    // };
    //
    // // 组件载入时
    // componentDidMount() {
    //     // 通过在componentDidMount里面设置setParams将title的值动态修改
    //     this.props.navigation.setParams({
    //         headerTitle: 'Test2顶部标题',
    //         tabBarLabel: 'Test2底部标题',
    //         navigatePress: this.navigatePress,
    //         tabBarOnPress: this._tabBarOnPress
    //     });
    // }
    //
    // // 底部导航点击事件
    // _tabBarOnPress = () => {
    //     console.log('点击了test2的底部按钮');
    // }
    // //顶部右侧按钮点击事件
    // navigatePress = () => {
    //     console.log('点击了test2的右上角按钮');
    // }

    render() {
        // bar()
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Test2 !
                </Text>
                {/*点击跳转页面*/}
                <Text style={styles.instructions} onPress={() => {
                    const {navigate} = this.props.navigation;
                    navigate('Detail1', {
                        headerTitle: '我是修改后的文字'
                    });
                }}>
                    点我跳转到Detail1，跳转的时候携带参数，修改了Detail1的导航栏文字
                </Text>
                <Text style={styles.instructions}>
                    当前页面的Tabbar是通过页面自定义的，图片和颜色都是图片本来的色彩。
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        marginTop: 10,
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 18
    },
});

