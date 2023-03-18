/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Image, View} from 'react-native';
// @ts-ignore
import styled from 'styled-components/native';
import { HistoryModel } from "../../../../reducers/history/historyReducer";
import { TYPE_INCOMING_CALL } from "../../../../constant";
import { IC_HISTORY_CALL, IC_HISTORY_INFO, IC_HISTORY_VIDEO_CALL } from "../../../../../assets";

interface ContactItemProps {
  item: HistoryModel;
  navigation: any;
}

function HistoryItem(props: ContactItemProps) {
  const {item} = props;
  function handleTime(){
    let dayList = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy", "Chủ Nhật"];
    let currentTime = new Date();
    console.log(currentTime.getFullYear());
    let date = new Date(item.time);
    if(currentTime.getFullYear() === date.getFullYear() && currentTime.getMonth() === date.getMonth() && currentTime.getDay() === date.getDay())
      return "Hôm nay"
    return dayList[date.getDay()]
  }
  return (
    <Container>
      <LeftContainer>
        {
          item.type === TYPE_INCOMING_CALL ? (
            <IconType
              source={IC_HISTORY_CALL}
            />
          ) : (
            <IconType
              source={IC_HISTORY_VIDEO_CALL}
            />
          )

        }
        <View>
            <NameText>{item.name}</NameText>
            <NumberText>{item.phoneNumber}</NumberText>
        </View>
      </LeftContainer>
      <RightContainer>
        <TimeText>{handleTime()}</TimeText>
        <TouchableOpacity onPress={() =>props.navigation.navigate('HistoryDetailScreen', {item: item})}>
            <Image
            source={IC_HISTORY_INFO}
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
  border-bottom-color:  rgba(0, 0, 0, 0.1);
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
  border-bottom-color:  rgba(0, 0, 0, 0.1);
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
