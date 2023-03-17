import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface Props {
  navigation: any;
  iconRight: any;
  title: string | undefined;
}
export default function Header(props: Props) {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
        style={{paddingVertical: 13.5, minWidth: 40}}>
        <Feather name="menu" size={25} />
      </TouchableOpacity>

      <Text numberOfLines={1} style={styles.text}>
        {props.title}
      </Text>
      {props.iconRight ? (
        <TouchableOpacity>
          <Fontisto name="camera" size={20} />
          {/* <IconRight /> */}
        </TouchableOpacity>
      ) : (
        <Pressable style={{paddingVertical: 13.5, minWidth: 40}}>
          {/* <Icons.commonSmartHome.arrow_sm_left color={'rgba(255,255,255,0)'} /> */}
        </Pressable>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 29,
    backgroundColor: 'white',
    // paddingVertical: Platform.OS === 'IOS' ? height * 0.01 : 0,
  },
  icon: {
    position: 'absolute',
    left: 8,
  },
  text: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 24,
    color: '#333333',
    maxWidth: '60%',
  },
});
