import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';

export default function Navbar({ screenName, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => { }}
      >
        <Entypo name="chevron-left" size={32} color="#493d8a" style={{ lineHeight: 32 }} />
      </TouchableOpacity>

      <Text style={styles.title}>{screenName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 20,
    height: 100,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',

  },

  backButton: {
    left: 20,
    position: 'absolute',
  },

  title: {
    fontSize: 22,
    color: '#493d8a',
    fontWeight: '700',
  }
})