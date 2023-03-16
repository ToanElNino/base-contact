import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacityBase,
} from 'react-native';
import styled from 'styled-components/native';

// import AntDesign from 'react-native-vector-icons/AntDesign';

const Container = styled.View`
  background-color: white;
  /* align-items: center; */
  flex-direction: column;
  flex: 1;
`;
const TopContainer = styled.View`
  flex: 2;
  background-color: white;
  align-items: center;
`;
const BottomContainer = styled.View`
  flex: 3;
  /* margin-top: ; */
  /* background-color: #f82121; */
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
  /* top: -150px; */
`;

const LogoImage1 = styled.Image`
  position: relative;
`;
const LogoImage2 = styled.Image`
  position: relative;
  top: -169px;
  /* margin-top: 42px; */
`;
const LogoImage3 = styled.Image`
  position: relative;
  margin-top: 30px;
  /* align-self: center; */
  /* top: 170px; */
  /* margin-top: 42px; */
`;
const AppNameTitle = styled.Text`
  position: relative;
  /* top: -169px; */
  /* top: 0px; */
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: #f2a54a;
`;
const AppNameDetail = styled.Text`
  position: relative;
  font-weight: 400;
  font-size: 15px;
  line-height: 35px;
  /* width: 80%; */
  color: #333333;
`;
const LoginStateText = styled.Text`
  position: relative;
  font-weight: 400;
  font-size: 15px;
  line-height: 35px;
  /* font-size: italic; */
  /* width: 80%; */
  color: #828282;
  position: absolute;
  bottom: 138px;
`;
const BaseLoginButton = styled.TouchableOpacity`
  /* position: relative; */
  width: 300px;
  height: 48px;
  /* left: 37px;
  top: 664px; */
  background: #f2a54a;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 78px;
`;
const ManualLoginButton = styled.TouchableOpacity`
  /* position: relative; */
  width: 300px;
  height: 48px;
  /* left: 37px;
  top: 664px; */
  /* background: #f2a54a; */
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  border-width: 1px;
  border-color: #f2a54a;
  position: absolute;
  bottom: 20px;
`;
const ManualLoginButtonText = styled.Text`
  font-weight: 500;
  color: #f2a54a;
  /* align-items: center; */
`;
const BaseLoginButtonText = styled.Text`
  font-weight: 500;
  color: #ffffff;
  /* align-items: center; */
`;
interface Props {
  navigation: any;
}
function LoginScreen(props: Props): JSX.Element {
  return (
    <Container>
      <TopContainer>
        <LogoImage1
          source={require('../../../assets/login/login-logo-1.png')}
        />
        <LogoImage2 source={require('../../../assets/login/login-logo.png')} />
      </TopContainer>
      <BottomContainer>
        <AppNameTitle>Base wework</AppNameTitle>
        <AppNameDetail>Giải pháp quản lý công việc</AppNameDetail>
        <AppNameDetail>& dự án toàn diện cho doanh nghiệp 4.0</AppNameDetail>
        <LogoImage3
          source={require('../../../assets/login/login-logo-3.png')}
        />
        <LoginStateText>Bạn chưa đăng nhập</LoginStateText>
        <BaseLoginButton onPress={() => props.navigation.navigate('HomeStack')}>
          <BaseLoginButtonText>ĐĂNG NHẬP BẰNG BASE ACCOUNT</BaseLoginButtonText>
        </BaseLoginButton>
        <ManualLoginButton>
          <ManualLoginButtonText>ĐĂNG NHẬP THỦ CÔNG</ManualLoginButtonText>
        </ManualLoginButton>
      </BottomContainer>
    </Container>
  );
}

export default LoginScreen;
