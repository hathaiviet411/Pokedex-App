import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';

export default function Favorite() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://github.com/nonamelittlefox/Pokedex-App/blob/develop/public/images/favorite/silly-first.png?raw=true' }}
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain'
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
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },

  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});