import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Basket, ItemCount } from './styles';

class Header extends Component {
  handleBasketNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Cart');
  };

  handleLogoNavigate = () => {
    const { navigation } = this.props;
    navigation.navigate('Home');
  };

  render() {
    const { cartSize } = this.props;
    console.tron.log(cartSize);
    return (
      <Container>
        <TouchableOpacity onPress={() => this.handleLogoNavigate()}>
          <Logo />
        </TouchableOpacity>
        <Basket onPress={() => this.handleBasketNavigate()}>
          <Icon name="shopping-basket" color="white" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </Basket>
      </Container>
    );
  }
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
