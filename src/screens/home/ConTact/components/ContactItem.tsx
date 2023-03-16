import React from 'react';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

interface ContactItemProps {
  avatar: string | undefined;
  name: string;
  number: string | undefined;
}

function ContactItem(props: ContactItemProps) {
  return (
    <Container>
      <Image
        source={require('../../../../../assets/contact/contact-avatar.png')}
      />
      <RightContainer>
        <NameText>{props.name}</NameText>
        <NumberText>0974303650</NumberText>
      </RightContainer>
    </Container>
  );
}

export default ContactItem;
const Container = styled.View`
  background-color: white;
  /* align-items: center; */
  /* flex-direction: column; */
  /* align-items: center; */
  flex-direction: row;
  align-content: center;
  align-items: center;
  height: 64px;
  /* flex: 1; */
`;
const RightContainer = styled.View`
  background-color: white;
  border-bottom-width: 0.5px;
  border-bottom-color: solid rgba(0, 0, 0, 0.1);
  padding-left: 16px;
  height: 64px;
  align-self: center;
  justify-content: center;
  /* align-items: center; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* flex: 1; */
`;

const NameText = styled.Text`
  font-size: 16px;
  line-height: 16px;
  color: #333333;
  font-weight: 500;
  margin-bottom: 5px;
`;
const NumberText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #828282;
  font-weight: 400;
`;
