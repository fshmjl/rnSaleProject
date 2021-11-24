import React from 'react';
import {
  StyleSheet,
  NativeModules,
  Platform,
  View,
  Image,
  Text,
  Dimensions,
  StatusBar
} from 'react-native';
const Home:React.FC<any> = (props) => {

  const {width, height} = Dimensions.get('window');
  const { StatusBarManager } = NativeModules;
  let statusBarHeight = 20;
  if (Platform.OS === 'ios') {
    StatusBarManager.getHeight((res: { height: number; }) => {
      statusBarHeight = res.height;
    });
  } else if (Platform.OS === 'android') {
    statusBarHeight = StatusBar.currentHeight ?? 0;
  }

  const styles = StyleSheet.create({
    container: {
      width,
      height,
      backgroundColor: '#ffffff'
    },
    top: {
      width,
      height: 230,
      // backgroundColor: 'red',
    },
    topBackground: {
      width,
      height: 184,
      // resizeMode: 'contain'
    }
  });
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.topBackground} source={require('../../images/home/top-bg.png')}></Image>
      </View>
    </View>
  );
};

export default Home;
