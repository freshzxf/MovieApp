/**
 * React-native Movie App
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

import App from './app/Components/Routers';
// import MovieList from './app/Components/MovieList';

export default class ReactNavigationDemo extends Component {
    render() {
        return (
            <App />
        );
    }
}

AppRegistry.registerComponent('IndexApp', () => IndexApp);