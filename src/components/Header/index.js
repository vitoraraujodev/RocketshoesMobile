import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Basket, ItemCount } from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  function handleBasketNavigate() {
    navigation.navigate('Cart');
  }

  function handleLogoNavigate() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <TouchableOpacity onPress={() => handleLogoNavigate()}>
        <Logo />
      </TouchableOpacity>
      <Basket onPress={() => handleBasketNavigate()}>
        <Icon name="shopping-basket" color="white" size={24} />
        <ItemCount>{cartSize || 0}</ItemCount>
      </Basket>
    </Container>
  );
}
