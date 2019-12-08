import styled from 'styled-components/native';

import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: #191920;
`;

export const Product = styled.View`
  background: #fff;
  width: 350px;
  border-radius: 4px;
  padding: 12px;
  margin: 15px;
`;

export const ProductImage = styled.Image`
  height: 220px;
  width: 220px;
  margin: auto;
`;

export const ProductTitle = styled.Text`
  font-size: 18px;
`;

export const ProductPrice = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin: 16px 0;
`;

export const SubmitButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
  border-radius: 4px;
  align-items: center;
  margin-top: auto;
`;

export const SubmitButtonAmount = styled.View`
  background: ${darken(0.05, colors.primary)};
  padding: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const SubmitButtonAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const SubmitButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
