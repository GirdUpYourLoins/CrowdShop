import React, { Component } from 'react'
import { View } from 'react-native';
import { Provider } from 'react-redux'

import store from './store'
import Navigator from './config/routes'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <Navigator />
                </View>
            </Provider>
        );
    }
}