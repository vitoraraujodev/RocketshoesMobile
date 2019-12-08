import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Basket, ItemCount } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo />
      <Basket>
        <Icon name="shopping-basket" color="white" size={24} />
        <ItemCount>{0}</ItemCount>
      </Basket>
    </Container>
  );
}
