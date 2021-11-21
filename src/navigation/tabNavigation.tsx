import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabNavData} from './navData';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();

const tabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      {tabNavData.map((item, idx) => (
        <Tab.Screen
          key={`tab_item${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: () => (
              <View style={styles.tabBarItemContainer}>
                <Image source={item.src} style={styles.imageLogo} />
              </View>
            ),
            tabBarLabel: ({focused}) => (
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  fontSize: 12,
                  color: focused ? colors.orange : colors.customDark,
                }}>
                {item.name}
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default tabNavigation;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  tabBarItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.white,
    paddingHorizontal: 10,
  },
  tabBarIcon: {
    width: 23,
    height: 23,
  },
  tabBarIconFocused: {
    tintColor: colors.white,
  },
  imageLogo: {
    height: height * 0.02,
    width: width * 0.05,
  },
});
