import React, {useEffect, useState} from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {View} from 'react-native';
import DetailInput from './components/DetailInput';
import {ScrollView} from 'react-native';
import {
  addContact,
  ContactModel,
  editContact,
} from '../../../reducers/contact/contactReducer';
import {useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';
import {ACTION_CONTACT_ADD, ACTION_CONTACT_EDIT} from '../../../constant';

interface Props {
  navigation: any;
  route: any;
}
interface Props1 {
  field: string | undefined;
  detailList: Array<string>;
  setFunction: any;
}
const DynamicInput = (props: Props1) => {
  function handleAddDetail() {
    // @ts-ignore
    let tmp = [...props.detailList, ''];
    console.log(tmp);
    // props.detailList?.push('');
    props.setFunction(tmp);
  }
  function handleRemoveDetail(index: number) {
    console.log(index);
    // @ts-ignore
    let tmp = props.detailList.filter((e, i) => {
      return i !== index;
    });
    // let tmp = [...props.detailList, ''];
    console.log(tmp);
    props.setFunction(tmp);
    // // props.detailList?.push('');
    // props.setFunction(tmp);
  }
  function handleChangeIndexInput(text: string, index: number) {
    // console.log(text);
    // console.log(index);
    let tmp = props.detailList.map((e, i) => {
      if (i === index) {
        return text;
      } else {
        return e;
      }
    });
    props.setFunction(tmp);
    console.log(tmp);
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
                onChangeText={(text: string) =>
                  handleChangeIndexInput(text, index)
                }
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
  const dispatch = useDispatch();
  const [phoneList, setPhoneList] = useState([]);
  const [emailList, setEmailList] = useState([]);
  const [addressList, setAddressList] = useState([]);
  const [birthdayList, setBirthdayList] = useState([]);
  const [firstName, setFirstName] = useState();
  const [familyName, setFamilyName] = useState();
  const [company, setCompany] = useState();
  const handleGoback = () => {
    props.navigation.goBack();
  };
  const contactItem = props.route.params?.contactItem;
  const type = props.route.params?.type;
  console.log(type);
  console.log(contactItem);

  useEffect(() => {
    if (type === ACTION_CONTACT_EDIT) {
      setFamilyName(contactItem?.familyName);
      setFirstName(contactItem?.firstName);
      setCompany(contactItem?.company);
      setPhoneList(contactItem?.phoneList);
      setAddressList(contactItem?.addressList);
      setEmailList(contactItem?.emailList);
      setBirthdayList(contactItem?.birthdayList);
    }
  }, []);
  const handleDone = () => {
    if (firstName === '' && familyName === '') {
      Alert.alert('Please enter name');
    } else {
      let contact: ContactModel = {
        phoneList: phoneList,
        firstName: firstName ?? '',
        familyName: familyName ?? '',
        emailList: emailList,
        addressList: addressList,
        birthdayList: birthdayList,
        company: company ?? '',
        key: uuid.v4().toString(),
        value: '',
      };
      if (type === ACTION_CONTACT_EDIT) {
        dispatch(editContact(contact));
      }
      if (type === ACTION_CONTACT_ADD) {
        dispatch(addContact(contact));
      }

      handleGoback();
    }
  };
  return (
    <Container>
      {/* <Header /> */}
      <HeaderButtons>
        <CancelButton onPress={() => handleGoback()}>
          <CancelButtonText>Hủy</CancelButtonText>
        </CancelButton>
        <DoneButton onPress={handleDone}>
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
            setFunction={setFirstName}
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
