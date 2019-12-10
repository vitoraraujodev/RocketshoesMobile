import { Alert } from 'react-native';

import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess, updateAmountSuccess } from './actions';

import formatPrice from '../../../util/format';

import * as localAPI from '../../../../api';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  try {
    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;
    if (amount > stockAmount) {
      Alert.alert('Quantidade fora de estoque.');
      return;
    }

    if (productExists) {
      yield put(updateAmountSuccess(id, amount));
    } else {
      const response = yield call(api.get, `/products/${id}`);
      const data = {
        ...response.data,
        amount: 1,
        formattedPrice: formatPrice(response.data.price),
      };
      yield put(addToCartSuccess(data));
    }
  } catch (e) {
    const stock = localAPI.stock.find(p => p.id === id);
    const stockAmount = stock.amount;
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stockAmount) {
      Alert.alert('Quantidade fora de estoque.');
      return;
    }
    if (productExists) {
      yield put(updateAmountSuccess(id, amount));
    } else {
      const product = localAPI.products.find(p => p.id === id);
      const data = {
        ...product,
        amount: 1,
        formattedPrice: formatPrice(product.price),
      };
      yield put(addToCartSuccess(data));
    }
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    return;
  }
  try {
    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    if (amount > stockAmount) return;
    yield put(updateAmountSuccess(id, amount));
  } catch (e) {
    const stock = localAPI.stock.find(p => p.id === id);
    const stockAmount = stock.amount;

    if (amount > stockAmount) {
      Alert.alert('Quantidade fora de estoque.');
      return;
    }
    yield put(updateAmountSuccess(id, amount));
  }
}
export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
