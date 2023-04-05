import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from "react";

export interface propsType {
  item: any;
}

export default function onboardingItem(props: propsType) {
  const [item, setItem] = useState(props['item']);

  return (
    <View style={styles.container}>
      {
        item ? (
          <View>
            <Text>{item['id']}</Text>
            <Image
              testID="avatar"
              style={{ width: 50, height: 50 }}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
        ) : (
          <Text></Text>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})