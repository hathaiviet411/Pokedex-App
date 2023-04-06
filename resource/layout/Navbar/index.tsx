import React from 'react';

import { Entypo } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

export default function Navbar({ screenName, navigation }) {
  const handleBackAction = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => { handleBackAction() }}
      >
        <Entypo name="chevron-left" size={32} color="#493d8a" style={{ lineHeight: 32 }} />
      </TouchableOpacity>

      <Text style={styles.title}>{screenName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  backButton: {
    left: 20,
    position: 'absolute',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  title: {
    fontSize: 22,
    color: '#493d8a',
    fontWeight: '700',
  }
})