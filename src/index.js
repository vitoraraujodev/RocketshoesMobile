import React, { Component } from 'react';
import { View, Text } from 'react-native';

import './config/ReactotronConfig';

export default class App extends Component {
  render() {
    console.tron.log('hey');
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}
