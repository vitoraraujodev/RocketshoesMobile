import React, { Component } from 'react';
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

import { products } from '../../../api';

import formatPrice from '../../util/format';

export default class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const formattedProducts = products.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));
    this.setState({ products: formattedProducts });
  }

  render() {
    const formattedProducts = this.state.products;
    return (
      <Container>
        <FlatList
          vertical
          data={formattedProducts}
          contentContainerStyle={{ alignItems: 'center' }}
          keyExtractor={product => product.id.toString()}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image }} />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{formatPrice(item.price)}</ProductPrice>
              <SubmitButton>
                <SubmitButtonAmount>
                  <Icon name="add-shopping-cart" color="white" size={24} />
                  <SubmitButtonAmountText value={1} />
                </SubmitButtonAmount>
                <SubmitButtonText>ADICIONAR</SubmitButtonText>
              </SubmitButton>
            </Product>
          )}
        />
      </Container>
    );
  }
}
