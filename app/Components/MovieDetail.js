/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Test3 extends Component {

    render() {
        return (
            <View>
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
