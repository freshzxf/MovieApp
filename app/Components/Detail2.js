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
    Button
} from 'react-native';

import NavStyle from './NavStyle.js';

import {NavigationActions} from 'react-navigation'

// todo：重置跳转 ？
const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'MyTab'})
    ]
});

// 通过自定义一个方法来实现页面跳转,并传递参数
const navigateAction = NavigationActions.navigate({
    routeName: 'Detail1',

    params: {headerTitle: 'hahaha'},

    action: NavigationActions.navigate({routeName: 'Detail1'})
})

export default class Detail2 extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        header: (
            <NavStyle backgroundColor={screenProps.themeColor}
                      leftClick={() => navigation.state.params ? navigation.state.params.navigatePress() : null}/>
        )
    })

    // 通过在componentDidMount里面设置setParams将title的值动态修改
    componentDidMount() {
        this.props.navigation.setParams({
            headerTitle: 'Detail2',
            navigatePress: this.navigatePress,
        });
    }

    // 返回上一页
    navigatePress = () => {
        const {goBack} = this.props.navigation;
        goBack();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Detail2!
                </Text>
                <Text style={styles.instructions}>
                    本页面的导航栏是纯自定义的，点击事件需要通过setParams来添加
                </Text>
                <Button title={'reset'} onPress={() => {
                    this.props.navigation.dispatch(resetAction)
                }}/>
                <Button title={'dispatch方法自定义跳转'} onPress={() => {
                    const {dispatch} = this.props.navigation; //ES6解构赋值获取到navigation中的方法
                    dispatch(navigateAction)
                }}/>
                <Button title={'navigate方法跳转'} onPress={() => {
                    const {navigate} = this.props.navigation; //ES6解构赋值获取到navigation中的方法
                    navigate('Test1')
                }}/>
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
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        fontSize: 18
    },
});

