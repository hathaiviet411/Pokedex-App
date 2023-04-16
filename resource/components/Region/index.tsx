import React, { useState } from 'react';

import regions from './regions';

import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Region() {
  const [hasScrollDown, setHasScrollDown] = useState(false);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.y;

    console.log(scrollPosition);

    if (scrollPosition > 30) {
      setHasScrollDown(true);
    } else {
      setHasScrollDown(false);
    }
  };

  return (
    <View style={[styles.container, { paddingTop: hasScrollDown ? 0 : 20 }]}>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={5}>
        {regions.map((region, index) => (
          <TouchableOpacity key={index} style={{ gap: 20 }}>
            <Image
              source={{ uri: region.region_image }}
              style={{
                width: '100%',
                height: 150,
                borderRadius: 15,
                resizeMode: 'stretch',
              }}
            />

            <View style={styles.transparentBackground}>

            </View>

            <View style={styles.regionItem}>
              <View style={styles.regionItemLeft}>
                <Text style={styles.regionItemName}>{region.name}</Text>
                <Text style={styles.regionItemGeneration}>{region.generation}</Text>
              </View>

              <View style={styles.regionItemRight}>
                {
                  region.pokemons.map((pokemon, pokemonIndex) => (
                    <Image
                      key={pokemonIndex}
                      source={{ uri: pokemon.avatar }}
                      style={{
                        width: 80,
                        height: 80,
                        resizeMode: 'cover',
                      }}
                    />
                  ))
                }
              </View>
            </View>
          </TouchableOpacity>
        ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },

  transparentBackground: {
    top: 0,
    height: 150,
    opacity: 0.5,
    width: '100%',
    borderRadius: 15,
    position: 'absolute',
    backgroundColor: '#000',
  },

  regionItem: {
    top: 0,
    flexDirection: 'row',
    position: 'absolute',
  },

  regionItemLeft: {
    gap: 5,
    paddingTop: 60,
    paddingLeft: 30,
  },

  regionItemName: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: '900',
  },

  regionItemGeneration: {
    fontSize: 16,
    color: '#F5F5F7',
    fontWeight: '700',
  },

  regionItemRight: {
    paddingTop: 40,
    paddingLeft: 30,
    flexDirection: 'row',
  },
});