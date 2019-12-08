import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Basket, ItemCount } from './styles';

export default class Header extends Component {
  handleBasketNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  handleLogoNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <TouchableOpacity onPress={() => this.handleLogoNavigate()}>
          <Logo />
        </TouchableOpacity>
        <Basket onPress={() => this.handleBasketNavigate()}>
          <Icon name="shopping-basket" color="white" size={24} />
          <ItemCount>{0}</ItemCount>
        </Basket>
      </Container>
    );
  }
}
