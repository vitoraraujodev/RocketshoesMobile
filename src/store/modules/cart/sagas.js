import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess, updateAmount } from './actions';

import formatPrice from '../../../util/format';

import { products } from '../../../../api';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;
    yield put(updateAmount(id, amount));
  } else {
    try {
      const response = yield call(api.get, `/products/${id}`);
      const data = {
        ...response.data,
        amount: 1,
        formattedPrice: formatPrice(response.data.price),
      };
      yield put(addToCartSuccess(data));
    } catch (e) {
      const product = products.find(p => p.id === id);
      const data = {
        ...product,
        amount: 1,
        formattedPrice: formatPrice(product.price),
      };
      yield put(addToCartSuccess(data));
    }
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
