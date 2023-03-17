/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, Text, View} from 'react-native';
import styled from 'styled-components/native';

interface ContactItemProps {
  avatar: string | undefined;
  name: string;
  number: string | undefined;
  navigation: any;
}

function HistoryItem(props: ContactItemProps) {
  return (
    <Container>
      <LeftContainer>
        <IconType
          source={require('../../../../../assets/history/phone_24px.png')}
        />
        <View>
            <NameText>Nguyễn Tiến Nam</NameText>
            <NumberText>0974303650</NumberText>
        </View>
      </LeftContainer>
      <RightContainer>
        <TimeText>Hôm nay</TimeText>
        <TouchableOpacity onPress={() =>props.navigation.navigate('HistoryDetailScreen')}>
            <Image
            source={require('../../../../../assets/history/info_outline_24px_rounded.png')}
            />
        </TouchableOpacity>
      </RightContainer>
    </Container>
  );
}

export default HistoryItem;
const Container = styled.View`
  background-color: white;
  /* align-items: center; */
  /* flex-direction: column; */
  /* align-items: center; */
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  flex: 1;
`;
const LeftContainer = styled.View`
  background-color: white;
  border-bottom-width: 0.5px;
  border-bottom-color: solid rgba(0, 0, 0, 0.1);
  padding-left: 16px;
  height: 64px;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  /* align-items: center; */
  /* flex-direction: column; */
  /* align-items: center; */
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
  flex-direction: row;
  align-content: center;
  align-items: center;
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
  margin-right: 14px;
  margin-top: 12px;
  padding-top: 2px;
`;
const TimeText = styled.Text`
  font-size: 13px;
  line-height: 16px;
  color: #828282;
  font-weight: 500;
  margin-bottom: 5px;
  margin-right: 14px;
  margin-top: 12px;
  letter-spacing: 0.12px;
  font-style: normal;
`;
const NumberText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  color: #828282;
  font-weight: 400;
`;
const IconType = styled(Image)`
    margin-right: 17px;
    margin-top: 11px;
`
