import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Entypo } from '@expo/vector-icons';

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