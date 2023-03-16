import React from 'react';
import styled from 'styled-components/native';
import Header from '../../../components/common/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import SearchBar from './components/SearchBar';
import {AlphabetList} from 'react-native-section-alphabet-list';
import {Text, View, ScrollView, VirtualizedList, StatusBar} from 'react-native';
import {StyleSheet} from 'react-native';
import ContactItem from './components/ContactItem';
import HistoryItem from './components/HistoryItem';

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
const HistoryListData = [
  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},
  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},

  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},

  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},

  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},

  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},

  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},

  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},
  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},

  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},

  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},

  {type: 1, name: 'Nguyễn Tiến Nam', number: '0974303650', time: 'Hôm nay'},
];
const Container = styled.View`
  background-color: white;
  /* align-items: center; */
  flex-direction: column;
  /* align-items: center; */
  flex: 1;
`;

const HistoryList = styled.View`
  margin: 8px 15px 0px 15px;
  /* padding-left */
`;

interface Props {
  navigation: any;
}

interface PropItem {
  id: number | undefined;
}
interface PropItemCount {
  data: any;
}

const getItemCount = (data: PropItemCount) => 15;

function HistoryScreen(props: Props): JSX.Element {
  // console.log(props.navigation)
  const renderItem = (item: PropItem) => (
    <HistoryItem item={item} key={item.id} navigation={props.navigation} />
  );
  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        // hidden={false}
        // translucent={true}
        backgroundColor={'white'}
      />
      <Header title="Lịch sử" iconRight={'true'} navigation={props.navigation}/>
      <HistoryList>
        <VirtualizedList
          showsVerticalScrollIndicator={false}
          data={HistoryListData}
          getItem={() => 9}
          getItemCount={() => 9}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </HistoryList>
    </Container>
  );
}

export default HistoryScreen;

const styles = StyleSheet.create({
  indexLetterStyle: {
    color: '#F2A54A',
    fontSize: 13,
    lineHeight: 22,
    fontWeight: 400,
    height: 30,
  },
});
