import React from 'react';

import { Container, HelloWorld } from './styles';

import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <HelloWorld>Hello World!</HelloWorld>
    </Container>
  );
}

Home.navigationOptions = {
  header: <Header />,
};
