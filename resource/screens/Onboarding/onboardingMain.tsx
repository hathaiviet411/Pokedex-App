import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import React from "react";
import slides from "./slides";
import Paginatior from './paginatior';
import OnboardingItem from './onboardingItem';

import { useState, useEffect, useCallback, useRef } from "react";
import {
  View,
  FlatList,
  Animated,
  StyleSheet,
  SafeAreaView,
} from "react-native";

SplashScreen.preventAutoHideAsync();

const fetchFonts = () => {
  Font.loadAsync({
    'Cookie-Regular': require('../../../assets/fonts/Cookie-Regular.ttf'),
  });
}

export interface props {
  route: any
  navigation: any,
}

export default function OnboardingMain(props) {
  const [appIsReady, setAppIsReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleChangeCurrentPage = (currentPage) => {
    console.log(currentPage);

    slidesRef.current.scrollToIndex({ index: currentPage });
  };

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
        <FlatList
          horizontal
          data={slides}
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewConfig}
          onViewableItemsChanged={viewableItemsChanged}
          keyExtractor={(item) => item['id'].toString()}
          scrollEventThrottle={32}
          renderItem={({ item }) => <OnboardingItem item={item} onChangeCurrentPage={handleChangeCurrentPage} navigation={props['navigation']} />}
          ref={slidesRef}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false
          })}
        />
      </View>

      <View style={{ flex: 1, position: 'absolute', bottom: 0 }}>
        <Paginatior data={slides} scrollX={scrollX} />
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
    flex: 3,
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