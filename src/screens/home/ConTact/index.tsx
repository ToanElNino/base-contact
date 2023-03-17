import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import Header from '../../../components/common/Header';
import SearchBar from './components/SearchBar';
import {AlphabetList} from 'react-native-section-alphabet-list';
import {StyleSheet} from 'react-native';
import ContactItem from './components/ContactItem';
import {useSelector} from 'react-redux';

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
const Container = styled.View`
  background-color: white;
  /* align-items: center; */
  flex-direction: column;
  /* align-items: center; */
  flex: 1;
`;

const SearchInputContainer = styled.View`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 9px;
`;
const ContactList = styled.View`
  //margin: 0px 15px 60px 15px;
  padding-bottom: 60px;
  /* padding-left */
`;

interface Props {
  navigation: any;
}

function ContactScreen(props: Props): JSX.Element {
  const {contactList} = useSelector((state: any) => state.contactReducer);
  console.log('log: ', contactList);

  return (
    <Container>
      <Header
        title="Liên hệ"
        iconRight={'true'}
        navigation={props.navigation}
      />
      <SearchInputContainer>
        <SearchBar />
      </SearchInputContainer>
      <ContactList>
        <AlphabetList
          data={contactList}
          index={customIndex}
          indexLetterStyle={styles.indexLetterStyle}
          renderCustomItem={item => (
            <ContactItem
              name={item.value}
              avatar={''}
              number={''}
              navigation={props.navigation}
              contactKey={item.key}
            />
          )}
          listHeaderHeight={36}
          // renderCustomSectionHeader={section => (
          //   <SectionView>
          //     <Text>{section.title}</Text>
          //   </SectionView>
          // )}
          // letterListContainerStyle={{backgroundColor: 'red'} }
          indexContainerStyle={{marginRight: 16}}
          indexLetterContainerStyle={{paddingVertical: 10}}
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
    fontWeight: '400',
    height: 30,
  },
});
