import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    console.tron.log(localApi);
    try {
      const response = await api.get('products');
      const formattedProducts = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));
      this.setState({ products: formattedProducts });
    } catch (e) {
      console.tron.log(e, 'Não deu pra fazer o GET');
      const formattedProducts = localApi.products.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));
      this.setState({ products: formattedProducts });
    }
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
              <SubmitButton onPress={() => this.handleAddProduct(item)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
