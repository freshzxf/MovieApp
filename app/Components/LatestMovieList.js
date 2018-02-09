/**
 * React-native Movie App
 * https://github.com/facebook/react-native
 * @flow
 */

/*导入react*/
import React, {Component} from 'react';

/*导入react-native组件*/
import {
    //AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight,
    ProgressBarAndroid,
    Modal,
} from 'react-native';

/*导入路由组件*/
import {
    StackNavigator,
    TabNavigator,
    addNavigationHelpers,
    NavigationActions
} from 'react-navigation'

/* 通过自定义一个方法来实现页面跳转,并传递参数*/
/*const navigateAction = NavigationActions.navigate({
    routeName: 'Detail1',

   // params: {headerTitle: 'hahaha'},

    action: NavigationActions.navigate({routeName: 'Detail1'})
})*/

export default class MovieList extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('https://movie.douban.com/j/search_subjects?type=movie&tag=%E6%9C%80%E6%96%B0&page_limit=100&page_start=0')
            .then((response) => response.json())
            .then((jsonData) => {        //jsonData就是上一步的response.json()
                this.setState({
                    data: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(jsonData.subjects), //data是一个对象数组
                });
                // console.log(this.state.data)
            })                           //你后面还可以继续疯狂的接.then并且传递数据
            .catch((error) => {          //注意尾部添加异常回调
                alert(error);
            });
    }

    renderMovieList(rowData) {
        return (
            <TouchableHighlight
                activeOpacity={0.7}
                underlayColor='rgba(0,0,0,0.05)'
                onHideUnderlay={() => {
                    // alert('onHideUnderlay')
                }}
                onShowUnderlay={() => {
                    // alert('onShowUnderlay')
                }}
                onPress={() => {
                    /*const {dispatch} = this.props.navigation; //ES6解构赋值获取到navigation中的方法
                    dispatch(navigateAction)*/
                }}
            >
                <View style={styles.item}>
                    <View style={styles.itemImage}>
                        <Image style={styles.image}
                               source={{uri: rowData.cover}}></Image>
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader}>{rowData.title}</Text>
                        <Text style={styles.itemMeta}>
                           {rowData.playable ?
                               <Text style={styles.itemMetaOn}>已上线</Text>
                               : '未上线'}
                        </Text>
                        <Text>
                            评分：
                            <Text style={styles.redText}>
                                {rowData.rate}
                            </Text>
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        if (!this.state.data) {//如果this.state.data没有数据(即网络请求未完成),则返回一个加载中的文本
            return (
                <Modal
                    transparent={true}
                    onRequestClose={() => this.onRequestClose()}
                >
                    <View style={{
                        flex:1,
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:"rgba(0, 0, 0, 0.2)"
                    }}>
                        <ProgressBarAndroid styleAttr='Inverse' color='#6435c9'/>
                    </View>
                </Modal>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ListView dataSource={this.state.data}
                              renderRow={this.renderMovieList}
                    />
                </View>
            );
        }
    }
}

let styles = StyleSheet.create({
    redText: {
        color: '#db2828',
        fontSize: 15,
        fontStyle:'italic'
    },
    itemMetaOn: {
        color: '#66c1ff',
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
        backgroundColor: '#eae7ff',
    }
});

// AppRegistry.registerComponent('MovieList', () => MovieList);