import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import formatPrice from '../../util/format';

import {
  Container,
  Product,
  ProductList,
  ProductContainer,
  ProductInfo,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductRemove,
  ProductAmountContainer,
  ProductAmountPanel,
  ProductAmountInput,
  ProductAmountIcon,
  ProductAmountPrice,
  TotalPriceContainer,
  TotalText,
  TotalPrice,
  SubmitButton,
  SubmitButtonText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {products.length ? (
        <>
          <ProductList>
            {products.map(product => (
              <Product key={product.id}>
                <ProductContainer>
                  <ProductImage
                    source={{
                      uri: product.image,
                    }}
                  />
                  <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.formattedPrice}</ProductPrice>
                  </ProductInfo>
                  <ProductRemove
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
                  >
                    <Icon size={30} color="#7159c1" name="delete-forever" />
                  </ProductRemove>
                </ProductContainer>

                <ProductAmountContainer>
                  <ProductAmountPanel>
                    <ProductAmountIcon onPress={() => decrement(product)}>
                      <Icon
                        size={30}
                        color="#7159c1"
                        name="remove-circle-outline"
                      />
                    </ProductAmountIcon>
                    <ProductAmountInput value={product.amount.toString()} />
                    <ProductAmountIcon onPress={() => increment(product)}>
                      <Icon
                        size={30}
                        color="#7159c1"
                        name="add-circle-outline"
                      />
                    </ProductAmountIcon>
                  </ProductAmountPanel>
                  <ProductAmountPrice>{product.subtotal}</ProductAmountPrice>
                </ProductAmountContainer>
              </Product>
            ))}

            <TotalPriceContainer>
              <TotalText>TOTAL</TotalText>
              <TotalPrice>{total}</TotalPrice>
            </TotalPriceContainer>

            <SubmitButton>
              <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
            </SubmitButton>
          </ProductList>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#ccc" />
          <EmptyText>Seu carrinho está vazio...</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}
