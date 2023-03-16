import React, {useState} from 'react';
import styled from 'styled-components/native';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {View} from 'react-native';
import DetailInput from './components/DetailInput';
import {ScrollView} from 'react-native';

interface Props {
  navigation: any;
}
interface Props1 {
  field: string | undefined;
  detailList: Array<string> | undefined;
  setFunction: any;
}
const DynamicInput = (props: Props1) => {
  function handleAddDetail() {
    let tmp = [...props.detailList, ''];
    console.log(tmp);
    // props.detailList?.push('');
    props.setFunction(tmp);
  }
  function handleRemoveDetail(index: number) {
    console.log(index);
    let tmp = props.detailList.filter((e, i) => {
      return i !== index;
    });
    // let tmp = [...props.detailList, ''];
    console.log(tmp);
    props.setFunction(tmp);
    // // props.detailList?.push('');
    // props.setFunction(tmp);
  }
  return (
    <View style={styles.container}>
      {props.detailList?.length > 0
        ? props.detailList.map((e, index) => (
            <View style={styles.additionalDetail} key={index}>
              <TouchableOpacity onPress={() => handleRemoveDetail(index)}>
                <DeleteImage
                  source={require('../../../../assets/add-contact/delete-icon.png')}
                />
              </TouchableOpacity>
              <TextInput
                placeholder={props.field}
                style={styles.input}
                value={e}
              />
            </View>
          ))
        : null}

      <AddSection>
        <TouchableOpacity onPress={handleAddDetail}>
          <AddImage
            source={require('../../../../assets/add-contact/add-icon.png')}
          />
        </TouchableOpacity>
        <AddDetailText>{props.field}</AddDetailText>
      </AddSection>
    </View>
  );
};
function AddContactScreen(props: Props): JSX.Element {
  const [phoneList, setPhoneList] = useState(['0974303650', '0386417319', '']);
  const [emailList, setEmailList] = useState(['toanquocnguyen@gmail.com']);
  const [addressList, setAddressList] = useState([
    'Số 12, Khuất Duy Tiến, Thanh Xuân, Hà Nội',
  ]);
  const [birthdayList, setBirthdayList] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [company, setCompany] = useState('');

  return (
    <Container>
      {/* <Header /> */}
      <HeaderButtons>
        <CancelButton onPress={() => props.navigation.goBack()}>
          <CancelButtonText>Hủy</CancelButtonText>
        </CancelButton>
        <DoneButton>
          <DoneButtonText>Xong</DoneButtonText>
        </DoneButton>
      </HeaderButtons>
      <ScrollView>
        <AvatarContainer>
          <AvatarImage
            source={require('../../../../assets/add-contact/default-avatar.png')}>
            <CameraImage
              source={require('../../../../assets/add-contact/camera.png')}
            />
          </AvatarImage>
        </AvatarContainer>
        <TextInputGroup>
          <DetailInput
            placeHolder="Họ"
            isFocused={true}
            state={familyName}
            setFunction={setFamilyName}
          />
          <DetailInput
            placeHolder="Tên"
            isFocused={false}
            state={firstName}
            setFunction={firstName}
          />
          <DetailInput
            placeHolder="Công ty"
            isFocused={false}
            state={company}
            setFunction={setCompany}
          />
          {/* <ContactTextInput1 placeholder={'Họ'} /> */}
        </TextInputGroup>
        <DynamicInputGroup>
          <DynamicInput
            field="thêm số điện thoại"
            detailList={phoneList}
            setFunction={setPhoneList}
          />
          <DynamicInput
            field="thêm email"
            detailList={emailList}
            setFunction={setEmailList}
          />
          <DynamicInput
            field="thêm địa chỉ"
            detailList={addressList}
            setFunction={setAddressList}
          />
          <DynamicInput
            field="thêm ngày sinh"
            detailList={birthdayList}
            setFunction={setBirthdayList}
          />
        </DynamicInputGroup>
      </ScrollView>
    </Container>
  );
}

export default AddContactScreen;
const Container = styled(View)`
  background-color: white;
  flex: 1;
`;
const HeaderButtons = styled.View`
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  /* flex: 1; */
  padding-top: 18px;
  padding-bottom: 10px;
`;

const CancelButton = styled.TouchableOpacity`
  height: 22px;
  width: 43px;
  margin-left: 16px;
`;

const CancelButtonText = styled.Text`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #f2a54a;
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
  color: #828282;
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
const TextInputGroup = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 20px;
`;
///dynamic
const DynamicInputGroup = styled(View)`
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 20px;
  /* height: 64px; */
`;
const DeleteImage = styled(Image)`
  width: 24px;
  height: 24px;
  /* position: relative; */
  /* top: 70px; */
  /* left: 70px; */
`;
const AddDetailText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #333333;
  margin-left: 17px;
`;
const AddSection = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border-radius: 10px; */
  height: 44px;
  margin-left: 16px;
  border-bottom-width: 0.5px;
  border-color: rgba(0, 0, 0, 0.1);
`;

const AddImage = styled(Image)`
  width: 24px;
  height: 24px;
  /* position: relative; */
  /* top: 70px; */
  /* left: 70px; */
`;
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // paddingHorizontal: 15,
    // justifyContent: 'space-between',
    // borderBottomWidth: 0.5,
    // borderColor: '#C4C4C4',
    // paddingTop: 15,
    marginBottom: 24,
  },
  additionalDetail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 15,
    // width: '80%',
    height: 44,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  iconSearch: {
    paddingRight: 5,
  },

  input: {
    width: '90%',
    color: '#2F80ED',
    fontSize: 15,
    fontWeight: '400',
    marginLeft: 17,
    height: 44,
  },
  ///dynamic
});
