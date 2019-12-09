import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Product,
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
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Product>
        <ProductContainer>
          <ProductImage
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
            }}
          />
          <ProductInfo>
            <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
            <ProductPrice>R$ 179.90</ProductPrice>
          </ProductInfo>
          <ProductRemove>
            <Icon size={30} color="#7159c1" name="delete-forever" />
          </ProductRemove>
        </ProductContainer>

        <ProductAmountContainer>
          <ProductAmountPanel>
            <ProductAmountIcon>
              <Icon size={30} color="#7159c1" name="remove-circle-outline" />
            </ProductAmountIcon>
            <ProductAmountInput>1</ProductAmountInput>
            <ProductAmountIcon>
              <Icon size={30} color="#7159c1" name="add-circle-outline" />
            </ProductAmountIcon>
          </ProductAmountPanel>
          <ProductAmountPrice>R$ 179.90</ProductAmountPrice>
        </ProductAmountContainer>
      </Product>
      <Product>
        <ProductContainer>
          <ProductImage
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
            }}
          />
          <ProductInfo>
            <ProductTitle>Tênis de Caminhada Leve Confortável</ProductTitle>
            <ProductPrice>R$ 179.90</ProductPrice>
          </ProductInfo>
          <ProductRemove>
            <Icon size={30} color="#7159c1" name="delete-forever" />
          </ProductRemove>
        </ProductContainer>

        <ProductAmountContainer>
          <ProductAmountPanel>
            <ProductAmountIcon>
              <Icon size={30} color="#7159c1" name="remove-circle-outline" />
            </ProductAmountIcon>
            <ProductAmountInput value="1" />
            <ProductAmountIcon>
              <Icon size={30} color="#7159c1" name="add-circle-outline" />
            </ProductAmountIcon>
          </ProductAmountPanel>
          <ProductAmountPrice>R$ 179.90</ProductAmountPrice>
        </ProductAmountContainer>
      </Product>
      <TotalPriceContainer>
        <TotalText>TOTAL</TotalText>
        <TotalPrice>R$ 179.90</TotalPrice>
      </TotalPriceContainer>

      <SubmitButton>
        <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
      </SubmitButton>
    </Container>
  );
}
