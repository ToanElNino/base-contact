import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import {routes} from 'src/commons/routes';

// interface Props{

// }
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="md-search-outline" size={20} style={styles.iconSearch} />
        <TextInput placeholder="Tìm kiếm trong danh bạ" style={styles.input} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: '#C4C4C4',
    paddingTop: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 15,
    // width: '80%',
    height: 36,
  },
  iconSearch: {
    paddingRight: 5,
  },

  input: {
    width: '90%',
    color: '#BDBDBD',
  },
});

export default SearchBar;
