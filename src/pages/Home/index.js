import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Home() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}

Home.navigationOptions = {
  title: 'Home',
};
