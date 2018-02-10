/**
 * React-native Movie App
 * https://github.com/facebook/react-native
 * @flow
 */

/*导入react*/
import React, {Component} from 'react';

/*导入基础组件*/
import {
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight,
    ProgressBarAndroid,
    Modal,
} from 'react-native';

/*导入样式表*/
import Styles from '../Styles/Main'

/*导出组件*/
export default class MovieList extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('https://api.douban.com/v2/movie/top250')
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
                    const {navigate} = this.props.navigation;
                    navigate('Detail1', {
                        headerTitle: '我是修改后的文字'
                    });
                }}
            >
                <View style={Styles.item}>
                    <View style={Styles.itemImage}>
                        <Image style={Styles.image}
                               source={{uri: rowData.images.large}}></Image>
                    </View>
                    <View style={Styles.itemContent}>
                        <Text style={Styles.itemHeader}>{rowData.title}</Text>
                        <Text style={Styles.itemMeta}>
                            {rowData.genres.join(' / ')}
                        </Text>
                        <Text>
                            评分：
                            <Text style={Styles.redText}>
                                {rowData.rating.average}
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
                    <ListView dataSource={this.state.data}
                              renderRow={this.renderMovieList}
                    />
                </View>
            );
        }
    }
}
