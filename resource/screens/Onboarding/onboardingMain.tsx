import React from "react";
import slides from "./slides";
import Pagination from './pagination';
import OnboardingItem from './onboardingItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useState, useRef, useEffect } from "react";
import { View, FlatList, Animated, StyleSheet, SafeAreaView } from "react-native";

export interface props {
  route: any
  navigation: any,
}

export default function OnboardingMain(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const handleChangeCurrentPage = (currentPage) => {
    slidesRef.current.scrollToIndex({ index: currentPage });
  };

  useEffect(() => {
    async function checkIfFirstLaunch() {
      const hasOpenedAppBefore = await AsyncStorage.getItem('hasOpenedAppBefore');

      if (hasOpenedAppBefore === null) {
        await AsyncStorage.setItem('hasOpenedAppBefore', 'true');
      } else {
        props.navigation.navigate('Login');
      }
    };

    checkIfFirstLaunch();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        <FlatList
          horizontal
          data={slides}
          pagingEnabled
          bounces={false}
          ref={slidesRef}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={viewableItemsChanged}
          keyExtractor={(item) => item['id'].toString()}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
          renderItem={({ item }) => <OnboardingItem item={item} onChangeCurrentPage={handleChangeCurrentPage} navigation={props['navigation']} />}
        />
      </View>

      <View style={{ flex: 1, position: 'absolute', bottom: 0 }}>
        <Pagination data={slides} scrollX={scrollX} />
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
    borderRadius: 50,
    backgroundColor: '#493d8a',
    marginHorizontal: 5,
  }
});