import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import * as CartActions from '../../store/modules/cart/actions';

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

import api from '../../services/api';

import * as localApi from '../../../api';

import formatPrice from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('products');
        const formattedProducts = response.data.map(product => ({
          ...product,
          formattedPrice: formatPrice(product.price),
        }));
        setProducts(formattedProducts);
      } catch (e) {
        console.tron.log(e, 'Não deu pra fazer o GET');
        const formattedProducts = localApi.products.map(product => ({
          ...product,
          formattedPrice: formatPrice(product.price),
        }));
        setProducts(formattedProducts);
      }
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

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
            <ProductPrice>{formatPrice(item.price)}</ProductPrice>
            <SubmitButton onPress={() => handleAddProduct(item.id)}>
              <SubmitButtonAmount>
                <Icon name="add-shopping-cart" color="white" size={24} />
                <SubmitButtonAmountText>
                  {amount[item.id] || 0}
                </SubmitButtonAmountText>
              </SubmitButtonAmount>
              <SubmitButtonText>ADICIONAR</SubmitButtonText>
            </SubmitButton>
          </Product>
        )}
      />
    </Container>
  );
}
