import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  margin: 12px;
  border-radius: 4px;
`;

export const ProductList = styled.ScrollView``;

export const Product = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 8px;
  margin-top: 4px;
  flex-direction: column;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex-direction: row;
`;
export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;
export const ProductInfo = styled.View`
  flex: 1;
  padding: 0 8px;
  margin-left: 10px;
`;
export const ProductTitle = styled.Text``;
export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;
export const ProductRemove = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

export const ProductAmountContainer = styled.View`
  background: #eee;
  flex-direction: row;
  align-items: center;
  padding: 0 8px;
  border-radius: 4px;
`;
export const ProductAmountPanel = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 4px;
`;
export const ProductAmountInput = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  margin: 4px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;
export const ProductAmountIcon = styled.TouchableOpacity``;
export const ProductAmountPrice = styled.Text`
  flex: 1;
  font-weight: bold;
  font-size: 16px;
  text-align: right;
`;

export const TotalPriceContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px;
`;
export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #bbb;
`;
export const TotalPrice = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  margin: 12px;
  padding: 12px;
`;
export const SubmitButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const EmptyContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 16px;
  margin: 16px;
`;
export const EmptyText = styled.Text`
  margin-top: 16px;
  font-size: 20px;
  font-weight: bold;
  color: #aaa;
`;
