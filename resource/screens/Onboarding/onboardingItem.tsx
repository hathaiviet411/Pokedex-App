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
            <Image
              testID="avatar"
              style={{ width: 342, height: 265 }}
              source={{ uri: item['image'] }}
            />

            <Text>{item['title']}</Text>

            <Text>{item['content']}</Text>
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