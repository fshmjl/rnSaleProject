import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {TabNavigator} from 'react-navigation';
import tabbarList from './tabbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabIcon: {
    width: 23,
    height: 23,
  },
  tabText: {
    color: '#666666',
    fontSize: 14,
  },
  tabSelectedText: {
    color: '#FF5500',
  },
  tabStyle: {
    alignSelf: 'center',
  },
});
// var navigation = true;

class RootView extends Component {
  constructor(props) {
    super(props);
    // navigation = this.props.navigation;
  }

  state = {
    selected: 'Home',
  };

  render() {
    const {selected} = this.state;
    return (
      <View style={styles.container}>
        <TabNavigator hidesTabTouch={true}>
          {tabbarList.map(item => {
            return (
              <TabNavigator.Item
                selected={selected === item.tabPage}
                title={item.tabName}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.tabSelectedText}
                renderIcon={() => (
                  <Image style={styles.tabIcon} source={item.icon} />
                )}
                renderSelectedIcon={() => (
                  <Image style={styles.tabIcon} source={item.selectedIcon} />
                )}
                tabStyle={styles.tabStyle}
                onPress={() => {
                  this.setState({selected: item.tabPage});
                }}
                key={item.tabPage}>
                <item.component navigation={item.navigator} />
              </TabNavigator.Item>
            );
          })}
        </TabNavigator>
      </View>
    );
  }
}

export default RootView;
