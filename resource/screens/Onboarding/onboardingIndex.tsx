import React from "react";
import Lottie from 'lottie-react-native';

import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from "react";
import { useIsFocused } from '@react-navigation/native';
import { View, Animated, StyleSheet, SafeAreaView, Easing } from "react-native";
export interface propsType {
  navigation: any;
  route: any;
}

SplashScreen.preventAutoHideAsync();

export default function OnboardingOne(props: propsType) {
  const loadingValue = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const isFocused = useIsFocused();

  const InitialAnimationSequence = () => {
    Animated.parallel([
      Animated.sequence([
        Animated.timing(loadingValue, {
          toValue: 1,
          duration: 6000,
          easing: Easing.linear,
          useNativeDriver: true
        }),
      ]),
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.6,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        })
      ]),
      Animated.sequence([
        Animated.delay(3000),
        Animated.spring(bounceAnim, {
          toValue: 0,
          friction: 3,
          useNativeDriver: true,
        }),
        Animated.spring(bounceAnim, {
          toValue: 1,
          friction: 10,
          useNativeDriver: true,
        })
      ])
    ]).start(() => {
      props.navigation.push('OnboardingMain');
    });
  }

  const [appIsReady, setAppIsReady] = useState(false);

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

      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>"Hello, sunshine!"</Animated.Text>

      <Animated.Text
        style={[styles.bounceText, {
          transform: [
            {
              translateY: bounceAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [2000, 240],
              }),
            },
          ],

          marginTop: 30,
        }]}
      >
        "Nice to meet you!"
      </Animated.Text>
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

  text: {
    bottom: 200,
    fontSize: 22,
    color: '#493d8a',
    fontWeight: '700',
    textAlign: 'center',
    position: 'absolute',
  },

  bounceText: {
    fontSize: 22,
    color: '#493d8a',
    fontWeight: '700',
    textAlign: 'center',
  }
});