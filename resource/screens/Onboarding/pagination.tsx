import React from 'react';

import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native';

export default function paginatior({ data, scrollX }) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          extrapolate: 'clamp',
          outputRange: [15, 30, 15],
        });

        const opacity = scrollX.interpolate({
          inputRange,
          extrapolate: 'clamp',
          outputRange: [0.3, 1, 0.3],
        });

        return (
          <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 64,
    flexDirection: 'row',
  },

  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#493d8a',
  }
})