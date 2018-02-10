/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*导入react*/
import React, { Component } from 'react';

/*导入基础组件*/
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';

/*定义主要样式*/
let styles = StyleSheet.create({
    redText: {
        color: '#db2828',
        fontSize: 15,
        fontStyle:'italic'
    },
    itemMetaOn: {
        color: '#333',
    },
    itemMeta: {
        fontSize: 16,
        color: 'rgba(0,0,0,0.6)',
        marginBottom: 6,
    },
    itemHeader: {
        fontSize: 18,
        fontFamily: 'Helvetica Neue',
        fontWeight: '300',
        color: '#6435c9',
        marginBottom: 6,
    },
    itemContent: {
        flex: 1,
        marginLeft: 13,
        marginTop: 6,
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(100,53,201,0.1)',
        // paddingBottom: 6,
        flex: 1,
    },
    image: {
        width: 100, //图片会根据宽度，首先等比例缩放，然后在根据所设置的高度展示图片，高度不足就会有一部分显示不全（保证照片不变形）
        height: 120,
        margin: 8,
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

/*导出样式*/
module.exports = styles;