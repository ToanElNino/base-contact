import React, {useEffect, useState} from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import {
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  ContactModel,
  deleteContact,
} from '../../../reducers/contact/contactReducer';
import {ACTION_CONTACT_EDIT} from '../../../constant';
import {
  IC_CAMERA_PICKER,
  IC_FEATURE_BUTTON_CALL,
  IC_FEATURE_BUTTON_FACETIME,
  IC_FEATURE_BUTTON_MAIL,
  IC_FEATURE_BUTTON_TEXT,
  IC_HEADER_BACK,
} from '../../../../assets';

interface Props {
  navigation: any;
  route: any;
}
function ContactDetailScreen(props: Props): JSX.Element {
  const dispatch = useDispatch();
  let initData: ContactModel = {
    familyName: '',
    birthdayList: [],
    firstName: '',
    emailList: [],
    phoneList: [],
    addressList: [],
    key: '',
    value: '',
    company: '',
  };
  const [data, setData] = useState(initData);
  const {contactList} = useSelector((state: any) => state.contactReducer);
  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
  // console.log(props.route.params);
  const {key} = props.route.params;
  console.log(key);
  useEffect(() => {
    let contactItem = contactList.find((e: {key: string}) => e.key === key);
    // console.log(contactItem);
    setData(contactItem);
  }, [contactList, key]);
  // console.log(contactList);
  function handleDeleteContact() {
    dispatch(deleteContact({key: data.key}));
    props.navigation.goBack();
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={'#fffbf6'} />
      <TopView>
        {/* <Header /> */}
        <HeaderButtons statusBarHeight={STATUSBAR_HEIGHT}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <BackIcon source={IC_HEADER_BACK} />
          </TouchableOpacity>
          <DoneButton
            onPress={() =>
              props.navigation.navigate('AddContactScreen', {
                contactItem: data,
                type: ACTION_CONTACT_EDIT,
              })
            }>
            <DoneButtonText>Sửa</DoneButtonText>
          </DoneButton>
        </HeaderButtons>
        <ScrollView>
          <AvatarContainer>
            <AvatarImage
              source={require('../../../../assets/history-detail/avatar.png')}>
              <CameraImage source={IC_CAMERA_PICKER} />
            </AvatarImage>
          </AvatarContainer>
          <NameContainer>
            <NameText>{data.familyName + ' ' + data.firstName}</NameText>
            <DetailText>UI/UX Design</DetailText>
          </NameContainer>
          <FeatureButtonContainer>
            <View>
              <ButtonBackground>
                <CallIcon source={IC_FEATURE_BUTTON_CALL} />
              </ButtonBackground>
              <FeatureText>Gọi điện</FeatureText>
            </View>
            <View>
              <ButtonBackground>
                <CallIcon source={IC_FEATURE_BUTTON_TEXT} />
              </ButtonBackground>
              <FeatureText>Nhắn tin</FeatureText>
            </View>
            <View>
              <ButtonBackground>
                <CallIcon source={IC_FEATURE_BUTTON_FACETIME} />
              </ButtonBackground>
              <FeatureText>Facetime</FeatureText>
            </View>
            <View>
              <ButtonBackground1>
                <CallIcon source={IC_FEATURE_BUTTON_MAIL} />
              </ButtonBackground1>
              <FeatureText1>Gửi mail</FeatureText1>
            </View>
          </FeatureButtonContainer>
        </ScrollView>
      </TopView>
      <BottomView>
        <Section1>
          <PhoneLabel>Điện thoại</PhoneLabel>
          {data.phoneList.map((e, index) => {
            return <PhoneText key={index}>{e}</PhoneText>;
          })}
          {/*<PhoneText>0974303650</PhoneText>*/}
        </Section1>
        <Section2>
          <NoteLabel>Ghi chú</NoteLabel>
          <NoteText placeHolder={'Thêm ghi chú'} />
        </Section2>
        <Section3>
          <SendMessageButton>
            <SendMessText>Gửi tin nhắn</SendMessText>
          </SendMessageButton>
        </Section3>
        <Section4>
          <DeleteButton onPress={() => handleDeleteContact()}>
            <DeleteText>Xóa người gọi</DeleteText>
          </DeleteButton>
        </Section4>
      </BottomView>
    </Container>
  );
}

export default ContactDetailScreen;
const Container = styled(View)`
  background-color: white;
  flex: 1;
`;
const TopView = styled.View`
  background: #fffbf6;
  /* padding-bottom: 8px; */
  /* opacity: 0.05; */
`;
const HeaderButtons = styled.View`
  /* background: #f2a54a20; */
  flex-direction: row;
  justify-content: space-between;
  /* flex: 1; */
  /* padding-top: 20px; */
  padding-bottom: 10px;
  /* padding-top: ${(props: {statusBarHeight: any}) =>
    props.statusBarHeight}px; */
  margin-top: 15px;
`;

const BackIcon = styled.Image`
  width: 28px;
  height: 28px;
  margin-left: 16px;
`;
const DoneButton = styled.TouchableOpacity`
  height: 22px;
  width: 43px;
  margin-right: 16px;
`;

const DoneButtonText = styled.Text`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #f2a54a;
`;
const AvatarContainer = styled.View`
  align-content: center;
  align-items: center;
  position: relative;
  background-color: #f2f2f2;
  width: 100px;
  height: 100px;
  align-self: center;
  border-radius: 50px;
  margin-top: 24px;
  /* top: 0px; */
`;
const AvatarImage = styled(ImageBackground)`
  width: 100px;
  height: 100px;
`;
const CameraImage = styled(Image)`
  width: 30px;
  height: 30px;
  position: relative;
  top: 70px;
  left: 70px;
`;
const NameContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;
const NameText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;
const DetailText = styled.Text`
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #828282;
`;
const FeatureButtonContainer = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
  margin-top: 24px;
  padding-bottom: 30px;
  align-items: center;
  align-content: center;
`;
const ButtonBackground = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #f2a54a;
  /* padding-bottom: 20px; */
`;
const CallIcon = styled(Image)`
  position: relative;
  width: 26px;
  height: 26px;
  left: 7px;
  top: 7px;
  /* margin-bottom: 8px; */
`;
const FeatureText = styled.Text`
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  color: #f2a54a;
  /* width: ; */
`;
const FeatureText1 = styled.Text`
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  color: #bdbdbd;
  /* background-color: red; */
  /* padding: 10px; */
  /* width: ; */
`;
const ButtonBackground1 = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ffffff;
  border: 0.5px solid #bdbdbd;
`;
const BottomView = styled.View`
  margin-left: 16px;
`;

const Section1 = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  /* background-color: red; */
  margin-top: 9px;
  height: 64px;
  /* margin-bottom: 8px; */
`;
const PhoneLabel = styled.Text`
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 3px;
`;
const PhoneText = styled.Text`
  margin-bottom: 8px;
  color: #2f80ed;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  padding-bottom: 2px;
`;

const Section2 = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  height: 64px;
`;
const NoteLabel = styled.Text`
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #333333;
`;
const NoteText = styled.TextInput`
  padding-top: 9px;
`;

const Section3 = styled.View`
  /* border-bottom: 0.5px solid rgba(0, 0, 0, 0.1); */
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  margin-top: 9px;
  height: 44px;
  /* margin-bottom: 8px; */
`;
const SendMessageButton = styled(TouchableOpacity)``;
const SendMessText = styled.Text`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  padding-top: 14px;
  color: #333333;
`;

const Section4 = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  /* margin-top: 9px; */
  height: 44px;
  /* margin-bottom: 8px; */
`;
const DeleteButton = styled(TouchableOpacity)``;
const DeleteText = styled.Text`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  padding-top: 14px;
  color: #ff4a4a;
`;
