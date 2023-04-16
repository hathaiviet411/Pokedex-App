import React, { useState } from 'react';

import Lottie from 'lottie-react-native';

import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useIsFocused } from '@react-navigation/native';

export default function Loading({ navigation, route }) {
  const isFocused = useIsFocused();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        setIsLoading(false);

        setTimeout(() => {
          navigation.navigate(route.params.nextScreen);
        }, 3000)
      }, 5000)
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {
        isLoading ? (
          <Lottie
            source={require('../../../public/lottifiles-json/coffee-loader.json')}
            autoPlay
            loop
          />
        ) : (
          <Lottie
            source={require('../../../public/lottifiles-json/thumbs-up-birdie.json')}
            autoPlay
            loop
          />
        )
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});

