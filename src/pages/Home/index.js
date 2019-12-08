import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import {
  Container,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  SubmitButton,
  SubmitButtonAmount,
  SubmitButtonAmountText,
  SubmitButtonText,
} from './styles';

import Header from '../../components/Header';

import { products } from '../../../api';

export default function Home() {
  return (
    <Container>
      <FlatList
        vertical
        data={products}
        contentContainerStyle={{ alignItems: 'center' }}
        keyExtractor={product => product.id.toString()}
        renderItem={({ item }) => (
          <Product>
            <ProductImage source={{ uri: item.image }} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>R$ 179.90</ProductPrice>
            <SubmitButton>
              <SubmitButtonAmount>
                <Icon name="add-shopping-cart" color="white" size={24} />
                <SubmitButtonAmountText>0</SubmitButtonAmountText>
              </SubmitButtonAmount>
              <SubmitButtonText>ADICIONAR</SubmitButtonText>
            </SubmitButton>
          </Product>
        )}
      />
    </Container>
  );
}

Home.navigationOptions = {
  header: <Header />,
};
