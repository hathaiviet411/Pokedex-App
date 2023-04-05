import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import React from "react";
import Lottie from 'lottie-react-native';

import slides from "./slides";

import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useCallback, useRef } from "react";
import { View, Text, Animated, StyleSheet, FlatList, SafeAreaView, Button, Easing, Image } from "react-native";

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

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView} >
      <View style={styles.mainContent}>
        <Text style={styles.text}>Evolynx's Pokédex</Text>

        <View style={[styles.justifyAlignCenter, styles.contentHolder]}>
          <Image
            testID="avatar"
            style={{ width: 342, height: 265 }}
            source={{ uri: slides[0]['image'] }}
          />

          <Text style={styles.title}>{slides[0]['title']}</Text>

          <Text style={styles.content}>{slides[0]['content']}</Text>
        </View>

        <View style={styles.pagination}>
          {slides.map((item, index) => {
            return (
              <View style={[styles.dot, { width: 20 }]} key={index.toString()}>

              </View>
            )
          })}
        </View>
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
    alignItems: 'center',
  },

  text: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: "Cookie-Regular",
  },

  title: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: "Poppins-Regular",
  },

  content: {
    fontSize: 18,
    marginTop: 50,
    color: '#666666',
    textAlign: 'center',
    fontFamily: "Poppins-Regular",
  },

  contentHolder: {
    marginTop: 80,
  },

  justifyAlignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  pagination: {
    height: 64,
    bottom: 50,
    position: 'absolute',
    flexDirection: 'row',
  },

  dot: {
    height: 20,
    borderRadius: 45 / 2,
    backgroundColor: '#493d8a',
    marginHorizontal: 5,
  }
});