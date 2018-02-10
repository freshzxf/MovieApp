/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//导入基础组件
import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    AsyncStorage
} from 'react-native';

//导入react-navigation相关组件
import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers
} from 'react-navigation';

// import { connect } from 'react-redux';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import ClassicMovieList from './ClassicMovieList';
import LatestMovieList from './LatestMovieList';
import CollectionMovieList from './CollectionMovieList';
import MovieDetail from './MovieDetail';

import Test1 from './Test1.js';
import Test2 from './Test2.js';
import Test3 from './Test3.js';
import Detail1 from './Detail1.js';
import Detail2 from './Detail2.js';

const ShiTuIcon = require('../../resources/img/ShiTu.png');

/**
 * 1、Test1是通过普通的属性创建的Tabbar和导航
 * 2、Test2是在页面中通过属性创建Tabbar和导航
 * 3、Test3是通过封装navigationOptions实现Tabbar和导航的
 */

// 二次封装导航栏配置函数
const TabOptions = (navTitle, normalImage, selectedImage, tabBarTitle) => {
    const headerTitle = navTitle; //顶部标题
    const tabBarLabel = tabBarTitle; //底部标题
    const tabBarIcon = (({tintColor, focused}) => {
        return (
            <Image
                source={!focused ? normalImage : selectedImage}
                style={[{height: 20, width: 20}, {tintColor: tintColor}]}
            />
        )
    });
    const headerTitleStyle = {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        textAlign:'center'
    }; // 设置导航条文字样式安卓上如果要设置文字居中，只要添加alignSelf:'center'就可以了
    // header的style
    const headerStyle = {
        backgroundColor: '#6435c9',
        height: 44,
    }; // 设置导航条的样式如果想去掉安卓导航条底部阴影可以添加elevation: 0,iOS去掉阴影是
    const gesturesEnabled = true; // 是否支持滑动返回，iOS默认支持，安卓默认关闭
    const tabBarVisible = true; // 是否隐藏底部标签栏默认不隐藏(true)

    return {headerTitle, tabBarLabel, tabBarIcon, headerTitleStyle, headerStyle, gesturesEnabled, tabBarVisible};
};


/*注册Tabs*/
const MyTab = TabNavigator({
    Tab0: {
        screen: ClassicMovieList,
        navigationOptions: () => TabOptions('经典推荐', ShiTuIcon, ShiTuIcon, '经典'),
    },
    Tab1: {
        screen: LatestMovieList,
        navigationOptions: () => TabOptions('最新上线', ShiTuIcon, ShiTuIcon, '最新'),
    },
    Tab2: {
        screen: CollectionMovieList,
        navigationOptions: () => TabOptions('影片收藏', ShiTuIcon, ShiTuIcon, '收藏'),
    },
    Tab3: {
        screen: Test2,
        navigationOptions: () => TabOptions('会员中心', ShiTuIcon, ShiTuIcon, '中心'),
    },
}, {
    tabBarPosition: 'bottom', // 设置tabbar的位置，iOS默认在底部，安卓默认在顶部（属性值：'top'，'bottom')
    swipeEnabled: true, // 是否允许在标签之间进行滑动
    animationEnabled: false, // 是否在更改标签时显示动画
    lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦
    initialRouteName: 'Tab1', // 设置默认的页面组件(默认是第一个tab页面)
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
        /* 安卓属性 */
        style:{
            backgroundColor: '#6435c9',
            height: 50,
        }, // 整条tabbar的样式
        activeTintColor: '#fff', // label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: '#929292', // label和icon的前景色 不活跃状态下(未选中)
        showIcon: true, // 是否显示图标，默认关闭
        showLabel: true, // 是否显示label文字，默认开启
        labelStyle:{
            color: '#fff',
            margin: 0
        }, //label文字的样式
        upperCaseLabel: false, // 是否使标签大写，默认为true
        indicatorStyle:{
            //backgroundColor: 'red',
            height: 0,
        }, // 标签指示器的样式对象（选项卡底部的行），安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
        // pressColor: 'red', // material涟漪效果的颜色（安卓版本需要大于5.0）
        // pressOpacity: 0.1, // 按压标签的透明度变化（安卓版本需要大于5.0）
        // scrollEnabled: true, // 是否启用可滚动选项卡(默认false，如果设为true，择选项卡长度超过屏幕自动横线滚动)

        /* iOS属性 */
        // activeTintColor:'#e62129', // label和icon的前景色 活跃状态下（选中）
        // inactiveTintColor:'#929292', // label和icon的前景色 不活跃状态下(未选中)
        // activeBackgroundColor:'blue', //label和icon的背景色 活跃状态下（选中）
        // inactiveBackgroundColor:'green', // label和icon的背景色 不活跃状态下（未选中）
        // showLabel:true, // 是否显示label，默认开启
        // style:{}, // tabbar的样式
        // labelStyle:{}, //label的样式
    }
});

/* 注册并导出StackNavigator组件栈 (将需要跳转的页面注册在这里面，全局才可以跳转)
** 在StackNavigator中注册后的组件都有navigation这个属性. navigation又有5个参数:navigate, goBack, state, setParams, dispatch
*/
export default MyApp = StackNavigator({
    // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
    // App启动时默认打开以下第一个组件
    Index: {
        screen: MyTab,
    },
    MovieDetail: {
        screen: MovieDetail,
        navigationOptions: () => TabOptions('影片详情', ShiTuIcon, ShiTuIcon, '影片详情'),
    }, // 此处设置了, 会覆盖组件内的static navigationOptions`设置. 具体参数详见下文},
    Detail1: {
        screen: Detail1
    },
    Detail2: {
        screen: Detail2,
    },
}, {
    initialRouteName: 'Index', // 设置默认的页面组件(默认是第一个tab页面)
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'float', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    //onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    //onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});

