import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

export default function Region() {
  return (
    <View style={styles.container}>
      <Text>Region</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})