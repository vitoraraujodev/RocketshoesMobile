import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

function Cart({ products }) {
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
                  <ProductRemove>
                    <Icon size={30} color="#7159c1" name="delete-forever" />
                  </ProductRemove>
                </ProductContainer>

                <ProductAmountContainer>
                  <ProductAmountPanel>
                    <ProductAmountIcon>
                      <Icon
                        size={30}
                        color="#7159c1"
                        name="remove-circle-outline"
                      />
                    </ProductAmountIcon>
                    <ProductAmountInput>1</ProductAmountInput>
                    <ProductAmountIcon>
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
              <TotalPrice>R$ 179.90</TotalPrice>
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

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price),
    formattedPrice: formatPrice(product.price),
  })),
});

export default connect(mapStateToProps, null)(Cart);
