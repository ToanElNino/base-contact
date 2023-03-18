import React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import Header from '../../../components/common/Header';
import {StatusBar, FlatList} from 'react-native';
// import {StyleSheet} from 'react-native';
import HistoryItem from './components/HistoryItem';
import {useSelector} from 'react-redux';
import {HistoryModel} from '../../../reducers/history/historyReducer';
interface Props {
  navigation: any;
}
function HistoryScreen(props: Props): JSX.Element {
  const {historyList} = useSelector((state: any) => state.historyReducer);
  console.log(historyList);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        // hidden={false}
        // translucent={true}
        backgroundColor={'white'}
      />
      <Header
        title="Lịch sử"
        iconRight={'true'}
        navigation={props.navigation}
      />
      <HistoryList>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={historyList}
          keyExtractor={(item: HistoryModel) => item.key}
          renderItem={({item}) => (
            <HistoryItem item={item} navigation={props.navigation} />
          )}
        />
      </HistoryList>
    </Container>
  );
}

export default HistoryScreen;

const Container = styled.View`
  background-color: white;
  flex-direction: column;
  flex: 1;
`;

const HistoryList = styled.View`
  margin: 8px 15px 0px 15px;
`;
