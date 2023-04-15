import React from "react";
import Lottie from 'lottie-react-native';

import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from "react";
import { useIsFocused } from '@react-navigation/native';
import { Animated, StyleSheet, SafeAreaView, Easing } from "react-native";

export interface propsType {
  navigation: any;
  route: any;
}

SplashScreen.preventAutoHideAsync();

export default function OnboardingOne(props: propsType) {
  const loadingValue = useRef(new Animated.Value(0)).current;

  const isFocused = useIsFocused();

  const InitialAnimationSequence = async () => {
    Animated.sequence([
      Animated.timing(loadingValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true
      }),
    ]).start(() => {
      props.navigation.push('OnboardingMain');
    });
  }

  useEffect(() => {
    SplashScreen.hideAsync();

    if (isFocused) {
      InitialAnimationSequence();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Lottie
        source={require('../../../public/lottifiles-json/onboarding-loading.json')}
        progress={loadingValue}
      />
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});