import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { Pokedex, Region, Favorite, Account } from '../../components';

const Tab = createBottomTabNavigator();

export default function Tabs() {
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
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
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
              <Text style={{
                fontSize: 16,
                fontWeight: '700',
                color: isFocused ? '#173EA5' : '#222',
              }}>
                {label}
              </Text>

              {
                index === 0 ? (
                  <MaterialCommunityIcons name="pokeball" size={24} color={isFocused ? '#173EA5' : '#222'} />
                ) : (
                  <View />
                )
              }

              {
                index === 1 ? (
                  <FontAwesome5 name="map-marker-alt" size={24} color="black" />
                ) : (
                  <View />
                )
              }

            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Pokedéx"
        component={Pokedex}
        options={{
          tabBarLabel: 'Pokedex',
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Region"
        component={Region}
        options={{
          headerStyle: {
            borderBottomWidth: 1,
            backgroundColor: '#FFF',
            borderBottomColor: '#DDDDDD',
          },
          headerTitleStyle: {
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
    height: 70,
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderTopColor: '#DDDDDD',
    borderTopWidth: 1,
  },

  tabBarItem: {

  },
});
