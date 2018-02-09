/**
 * React-native Movie App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    //AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight
} from 'react-native';


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
                    // alert('onPress')
                }}
            >
                <View style={styles.item}>
                    <View style={styles.itemImage}>
                        <Image style={styles.image}
                               source={{uri: rowData.images.large}}></Image>
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.itemHeader}>{rowData.title}</Text>
                        <Text style={styles.itemMeta}>
                            {rowData.genres.join(' / ')}
                        </Text>
                        <Text style={styles.redText}>
                            {rowData.rating.average}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    render() {
        if (!this.state.data) {//如果this.state.data没有数据(即网络请求未完成),则返回一个加载中的文本
            return (
                <Text>loading...</Text>
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