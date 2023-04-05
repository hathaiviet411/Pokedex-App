import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import React from "react";
import Lottie from 'lottie-react-native';

import slides from "./slides";
import OnboardingItem from "./onboardingItem";

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Animated, StyleSheet, FlatList, SafeAreaView, Button, Easing } from "react-native";

SplashScreen.preventAutoHideAsync();

const fetchFonts = () =>
  Font.loadAsync({
    'Cookie-Regular': require('../../../assets/fonts/Cookie-Regular.ttf'),
  });

export default function OnboardingTwo() {
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
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const renderItem = ({ item }) => {
    return (
      <OnboardingItem item={item} />
    )
  };

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView} >
      <View style={styles.mainContent}>
        <Text style={styles.text}>Evolynx's Pokédex</Text>

        <FlatList data={slides} renderItem={renderItem} style={styles.flatList} />
      </View>
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

  mainContent: {
    flex: 1,
    width: '100%',
    paddingTop: 100,
  },

  text: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: "Cookie-Regular",
  },

  flatList: {
    marginTop: 50,
  },

  flexJustifyAlignCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});