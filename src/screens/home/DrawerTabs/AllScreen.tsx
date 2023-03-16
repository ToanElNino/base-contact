import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";

interface Props{
  navigation: any;
}
function AllScreen(props: Props) {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Text>Open</Text>
      </TouchableOpacity>
      <Text>hehe</Text>
    </View>
  );
}

export default AllScreen;
