import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';
const Home:React.FC<any> = (props) => {
  // const {navigation} = props;
  // if (navigation) {
  // }
  const styles = StyleSheet.create({
    navigation: {
      height: 88,
      width: Dimensions.get('window').width,
      backgroundColor: 'red',
    },
  });
  return (
    <View>
      <Text>首页</Text>
    </View>
  );
};

export default Home;
