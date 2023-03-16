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
  style: any;
  iconRight: any;
  cancel: boolean | undefined;
  cancelHandle: any;
  onPressLeft: any;
  color: any;
  title: string | undefined;
  onPressRight: any;
}
export default function Header(props: Props) {
  const IconRight = props.iconRight;
  return (
    <View style={[styles.container, props.style]}>
      {props.cancel ? (
        <View style={{borderRadius: 20, overflow: 'hidden'}}>
          <Pressable
            onPress={props.cancelHandle}
            android_ripple={{color: '#cecece', borderless: false}}
            style={{minWidth: 40}}>
            <Text style={{color: 'black', textAlign: 'center'}}>Hủy</Text>
          </Pressable>
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (props.onPressLeft) {
              props.onPressLeft();
            }
            props.navigation.goBack();
          }}
          style={{paddingVertical: 13.5, minWidth: 40}}>
          <Feather name="menu" size={25} />
        </TouchableOpacity>
      )}

      {props.color ? (
        <Text
          // numberOfLines={1}
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            paddingLeft: 10,
            color: props.color,
          }}>
          {props.title}
        </Text>
      ) : (
        <Text numberOfLines={1} style={styles.text}>
          {props.title}
        </Text>
      )}
      {props.iconRight ? (
        <TouchableOpacity onPress={props.onPressRight}>
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
