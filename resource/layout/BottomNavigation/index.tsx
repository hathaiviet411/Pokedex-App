import React, { useRef } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Pokedex, Region, Favorite, Account } from '../../components';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  const scaleValue = useRef(new Animated.Value(1)).current;

  function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={style.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }

            startAnimation();
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const startAnimation = () => {
            Animated.sequence([
              Animated.timing(scaleValue, {
                toValue: 1.2,
                duration: 150,
                useNativeDriver: true,
              }),
              Animated.spring(scaleValue, {
                toValue: 1,
                friction: 3,
                tension: 40,
                useNativeDriver: true,
              }),
            ]).start();
          };

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              style={style.tabBarItem}
              onLongPress={onLongPress}
              accessibilityRole="button"
              testID={options.tabBarTestID}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityState={isFocused ? { selected: true } : {}}
            >

              {
                index === 0 ? (
                  <Animated.View style={isFocused ? {
                    transform: [{ scale: scaleValue }],
                    top: -15,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    alignItems: 'center',
                    position: 'absolute',
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                  } : {}}>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain',
                      }}
                      source={
                        isFocused ?
                          require('../../../public/images/poke-active.png') :
                          require('../../../public/images/poke-inactive.png')
                      }
                    />
                  </Animated.View>
                ) : (
                  <View />
                )
              }

              {
                index === 1 ? (
                  <Animated.View style={isFocused ? {
                    transform: [{ scale: scaleValue }],
                    top: -15,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    alignItems: 'center',
                    position: 'absolute',
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                  } : {}}>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain',
                      }}
                      source={
                        isFocused ?
                          require('../../../public/images/region-active.png') :
                          require('../../../public/images/region-inactive.png')
                      }
                    />
                  </Animated.View>
                ) : (
                  <View />
                )
              }

              {
                index === 2 ? (

                  <Animated.View style={isFocused ? {
                    transform: [{ scale: scaleValue }],
                    top: -15,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    alignItems: 'center',
                    position: 'absolute',
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                  } : {}}>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain',
                      }}
                      source={
                        isFocused ?
                          require('../../../public/images/fav-active.png') :
                          require('../../../public/images/fav-inactive.png')
                      }
                    />
                  </Animated.View>
                ) : (
                  <View />
                )
              }

              {
                index === 3 ? (

                  <Animated.View style={isFocused ? {
                    transform: [{ scale: scaleValue }],
                    top: -15,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    alignItems: 'center',
                    position: 'absolute',
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                  } : {}}>
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        resizeMode: 'contain',
                      }}
                      source={
                        isFocused ?
                          require('../../../public/images/acc-active.png') :
                          require('../../../public/images/acc-inactive.png')
                      }
                    />
                  </Animated.View>
                ) : (
                  <View />
                )
              }

              <Text style={{
                fontSize: 14,
                fontWeight: '700',
                color: isFocused ? '#173EA5' : '#222',
              }}>
                {
                  isFocused ? label : ''
                }
              </Text>
            </TouchableOpacity >
          );
        })}
      </View >
    );
  }

  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />} initialRouteName='Pokedex'>
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: 'Pokedéx',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Regions"
        component={Region}
        options={{
          headerStyle: {
            borderBottomWidth: 1,
            backgroundColor: '#FFF',
            borderBottomColor: '#DDDDDD',
          },
          headerTitleStyle: {
            fontSize: 18,
            color: '#212121',
            fontWeight: '700',
          }
        }}
      />

      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerStyle: {
            borderBottomWidth: 1,
            backgroundColor: '#FFF',
            borderBottomColor: '#DDDDDD',
          },
          headerTitleStyle: {
            fontSize: 18,
            color: '#212121',
            fontWeight: '700',
          }
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerStyle: {
            borderBottomWidth: 1,
            backgroundColor: '#FFF',
            borderBottomColor: '#DDDDDD',
          },
          headerTitleStyle: {
            fontSize: 18,
            color: '#212121',
            fontWeight: '700',
          }
        }}
      />
    </Tab.Navigator>
  )
};

const style = StyleSheet.create({
  tabBar: {
    gap: 50,
    height: 70,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderTopColor: '#eeeeee',
  },

  tabBarItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
