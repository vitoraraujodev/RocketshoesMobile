import styled from 'styled-components/native';

import colors from '../../styles/colors';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.dark};
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
  background: #191920;
`;

export const Basket = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  height: 24px;
  width: 24px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
