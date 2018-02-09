/**
*Created by freshzxf on :
*Function :
*Desc :
*/
import React, { Component } from 'react';
import { View, Text, Image, } from 'react-native';

export default class  extends Component {
  render() {
    return (

    );
  }
}

let styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection:'column', //主轴方向：row | column（默认）
        justifyContent: 'center', //主轴对齐方式：flex-start | flex-end | center（默认） | space-between | space-around
        alignItems: 'stretch', //交叉轴对齐方式：flex-start | flex-end | center | stretch（默认）
        backgroundColor: '#F5FCFF'
    },
    content: {
        //alignSelf: 'flex-start', //单独设置自己在交叉轴的对齐方式：auto | flex-start | flex-end | center | stretch
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
    },
    welcome: {
        color: '#e53577',
        backgroundColor:'#ff9933',
        flex:5
    },
    instructions: {
        color: '#c55',
        backgroundColor:'#66c1ff',
        flex:1
    }
});