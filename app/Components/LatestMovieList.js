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
    Stylesheet,
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
    NavigationActions //自定义跳转行为
} from 'react-navigation'

/*导入样式表*/
import Styles from '../Styles/Main'

/* 通过自定义一个方法来实现页面跳转,并传递参数*/
const navigateAction = NavigationActions.navigate({
    routeName: 'MovieDetail',
    params: {headerTitle: 'MovieDetail标题'},
    action: NavigationActions.navigate({routeName: 'MovieDetail'})
})

/*导出组件*/
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
                    const {dispatch} = this.props.navigation; //ES6解构赋值获取到navigation中的方法
                    dispatch(navigateAction)
                }}
            >
                <View style={Styles.item} id={rowData.id} name={rowData.title}>
                    <View style={Styles.itemImage}>
                        <Image style={Styles.image}
                               source={{uri: rowData.cover}}></Image>
                    </View>
                    <View style={Styles.itemContent}>
                        <Text style={Styles.itemHeader}>{rowData.title}</Text>
                        <Text style={Styles.itemMeta}>
                           {rowData.playable ?
                               <Text style={Styles.itemMetaOn}>已上线</Text>
                               : '未上线'}
                        </Text>
                        <Text>
                            评分：
                            <Text style={Styles.redText}>
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
                <View style={Styles.container}>
                    <ListView
                        dataSource={this.state.data}
                        renderRow={this.renderMovieList.bind(this)} //bind(this)能解决路由跳转问题
                    />
                </View>
            );
        }
    }
}