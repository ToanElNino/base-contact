import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';

function Header(): JSX.Element {
  return (
    <Container>
      <Title>header</Title>
    </Container>
  );
}

const Container = styled.View``;
const Title = styled.Text``;

export default Header;
