import React from 'react';
import LottieView from 'lottie-react-native';

import { StyleSheet, Text, View, Image } from 'react-native';

export default function Favorite() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../../public/lottifiles-json/empty.json')}
        autoPlay
        loop
        style={{
          width: 400,
        }}
      />

      <Text style={styles.title}>{`You haven't favorited any Pokémon :(`}</Text>

      <Text style={styles.content}>Click on the heart icon of your favorite Pokémon and they will appear here.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },

  content: {
    fontSize: 14,
    textAlign: 'center',
  },
});