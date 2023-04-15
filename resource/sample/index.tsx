import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

