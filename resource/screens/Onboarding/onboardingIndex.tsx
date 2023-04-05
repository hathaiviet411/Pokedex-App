import React from "react";
import * as Font from 'expo-font';
import Lottie from 'lottie-react-native';
import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Animated, StyleSheet, FlatList, SafeAreaView, Button, Easing } from "react-native";

export interface propsType {
  navigation: any;
  route: any;
}

SplashScreen.preventAutoHideAsync();

const fetchFonts = () =>
  Font.loadAsync({
    'Cookie-Regular': require('../../../assets/fonts/Cookie-Regular.ttf'),
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
  });

export default function OnboardingOne(props: propsType) {
  const loadingValue = useRef(new Animated.Value(0)).current;
  const bounceValueFirst = useRef(new Animated.Value(1)).current;

  const [isShowLoadingAnimation, setIsShowLoadingAnimation] = useState(true);

  const InitialAnimationSequence = () => {
    Animated.sequence([
      Animated.timing(loadingValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true
      }),
    ]).start(() => {
      setIsShowLoadingAnimation(false);
      props.navigation.push('OnboardingMain');
    });
  }

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await fetchFonts();
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      InitialAnimationSequence();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView} >
      <StatusBar style="auto" />

      {
        isShowLoadingAnimation ? (
          <Lottie
            source={require('../../../public/lottifiles-json/onboarding-loading.json')}
            progress={loadingValue}
          />
        ) : (
          <View />
        )
      }

      <Animated.Text style={{
        marginBottom: 200,
        transform: [{ translateX: bounceValueFirst }],
      }}>
        <Text style={styles.text}>Please wait...</Text>
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
    fontSize: 40,
    fontFamily: "Cookie-Regular",
  }
});