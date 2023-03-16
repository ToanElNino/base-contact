import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import Header from '../../../components/common/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchBar from './components/SearchBar';
import {AlphabetList} from 'react-native-section-alphabet-list';
import {Text, View, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import ContactItem from './components/ContactItem';
import {useDispatch, useSelector} from 'react-redux';

// import AntDesign from 'react-native-vector-icons/AntDesign';
const customIndex = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const data = [
  {value: 'ANguyễn Tiến Nam', key: 'lCUTs2', numberPhone: '0974303650'},
  {value: 'AVũ Mạnh Linh', key: 'TXdL0c', numberPhone: '0974303650'},
  {value: 'ATrần Thái Hà', key: 'zqsiEw', numberPhone: '0974303650'},
  {value: 'ALê Ngọc Linh', key: 'psg2PM', numberPhone: '0974303650'},
  {value: 'BThái Thùy Trang', key: '1K6I18', numberPhone: '0974303650'},
  {value: 'BThái Lê Kiều', key: 'NVHSkA', numberPhone: '0974303650'},
  {value: 'Bảo Ngọc', key: 'SaHqyG', numberPhone: '0974303650'},
  {value: 'BDương Lê', key: 'iaT1Ex', numberPhone: '0974303650'},
];
const Container = styled.View`
  background-color: white;
  /* align-items: center; */
  flex-direction: column;
  /* align-items: center; */
  flex: 1;
`;
const HeaderContainer = styled.View`
  /* background-color: white; */
  /* align-items: center; */
  /* flex-direction: column; */
  /* align-items: center; */
  flex: 1;
`;

const SearchInputContainer = styled.View`
  /* flex-direction: row; */
  /* background-color: #F2F2F2; */
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 9px;
  /* align-items: center; */
  /* flex-direction: column; */
  /* flex: 1; */
`;
const ContactList = styled.View`
  margin: 0px 15px 0px 15px;
  /* padding-left */
`;
const SectionView = styled.View`
  /* margin: 0px 15px 0px 15px; */
  /* padding-left */
`;

interface Props {
  navagation: any;
}

function ContactScreen(props: Props): JSX.Element {
  const {contactList} = useSelector((state: any) => state.contactReducer);
  useEffect(() => {
    console.log(contactList);
  }, [contactList]);
  return (
    <Container>
      <Header title="Liên hệ" iconRight={'true'} />
      <SearchInputContainer>
        <SearchBar />
      </SearchInputContainer>
      <ContactList>
        <AlphabetList
          data={data}
          index={customIndex}
          indexLetterStyle={styles.indexLetterStyle}
          renderCustomItem={item => <ContactItem name={item.value} />}
          listHeaderHeight={36}
          // renderCustomSectionHeader={section => (
          //   <SectionView>
          //     <Text>{section.title}</Text>
          //   </SectionView>
          // )}
          // indexContainerStyle={{backgroundColor: 'red'}}
          // indexLetterContainerStyle={{backgroundColor: 'red'}}
        />
      </ContactList>
    </Container>
  );
}

export default ContactScreen;

const styles = StyleSheet.create({
  indexLetterStyle: {
    color: '#F2A54A',
    fontSize: 13,
    lineHeight: 22,
    fontWeight: 400,
    height: 30,
  },
});
