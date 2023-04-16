import React, { useRef, useEffect } from 'react';

import pokemonList from './pokemon-list';
import FastImage from 'react-native-fast-image'

import { useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  Animated,
  Platform,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function Dashboard() {
  const [keyword, setKeyword] = useState('');
  const [pokeList, setPokeList] = useState(pokemonList);

  const handleKeyworkChange = (value) => {
    setKeyword(value);
  };

  const handleClickFavoriteButton = (id) => {
    const newPokeList = pokeList.map((pokemon) => {
      if (pokemon.id === id) {
        return {
          ...pokemon,
          favorite: !pokemon.favorite,
        };
      }

      return pokemon;
    });

    setPokeList(newPokeList);
  };

  useEffect(() => {
    setPokeList(pokemonList);
  }, [])

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'ios' ? 50 : 40 }]}>
      <View style={styles.searchBar}>
        <AntDesign name="search1" size={22} color="#666666" />
        <TextInput
          value={keyword}
          autoCorrect={false}
          style={styles.searchBarInput}
          autoCapitalize="none"
          placeholder="Search Pokemon..."
          placeholderTextColor={'#999999'}
          onChangeText={handleKeyworkChange}
        />
      </View>

      <Animated.View style={{
        gap: 30,
        height: 60,
        marginTop: 10,
        paddingTop: 10,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#F2F2F2',
        justifyContent: 'center',
      }}>
        <TouchableOpacity
          style={styles.kindSortButton}
        >
          <Text style={styles.kindSortButtonText}>All kinds</Text>
          <Entypo name="chevron-down" size={22} color="#FFF" style={{ marginLeft: 5 }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.numberSortButton}
        >
          <Text style={styles.numberSortButtonText}>Ascending</Text>
          <Entypo name="chevron-down" size={22} color="#FFF" style={{ marginLeft: 5 }} />
        </TouchableOpacity>
      </Animated.View>

      <View style={styles.pokeList}>
        <ScrollView scrollEventThrottle={64} removeClippedSubviews shouldRasterizeIOS>
          {
            pokeList.map((pokemon, index) => (
              <TouchableOpacity style={[styles.pokeItem, { backgroundColor: pokemon.cardColor }]} key={index}>
                <View style={styles.pokeItemLeft}>
                  <Text style={styles.coordinateText}>{pokemon.coordinate}</Text>

                  <Text style={styles.pokeName}>{pokemon.name}</Text>

                  <View style={{ flexDirection: 'row', gap: 5 }}>
                    <TouchableOpacity
                      style={[styles.elementButton, { backgroundColor: pokemon.elementColor }]}
                    >
                      <FastImage
                        style={{
                          left: 5,
                          width: 20,
                          height: 20,
                          position: 'absolute',
                        }}
                        source={{ uri: pokemon.elementImage, priority: FastImage.priority.high }}
                      />
                      <Text style={styles.elementButtonText}>{pokemon.element}</Text>
                    </TouchableOpacity>

                    {
                      pokemon.type ? (
                        <TouchableOpacity
                          style={[styles.typeButton, { backgroundColor: pokemon.typeColor }]}
                        >
                          <Image
                            style={{
                              left: 5,
                              width: 20,
                              height: 20,
                              position: 'absolute',
                            }}
                            source={{ uri: pokemon.typeImage }}
                          />
                          <Text style={styles.typeButtonText}>{pokemon.type}</Text>
                        </TouchableOpacity>
                      ) : (
                        <View style={styles.typeButton} />
                      )
                    }

                  </View>
                </View>

                <View style={[styles.pokeItemRight, { backgroundColor: pokemon.avatarHolderColor }]}>
                  <TouchableOpacity
                    style={[styles.favoriteButton, { zIndex: pokemon.favorite ? 2 : 1 }]}
                    onPress={() => handleClickFavoriteButton(pokemon.id)}
                  >
                    <AntDesign
                      name={pokemon.favorite ? 'heart' : 'hearto'}
                      size={16}
                      color={pokemon.favorite ? '#FD525C' : '#FFFFFF'}
                    />
                  </TouchableOpacity>

                  <Image
                    style={{
                      width: 120,
                      height: 120,
                      resizeMode: 'contain'
                    }}
                    source={{ uri: pokemon.elementBackground }}
                  />

                  <Image
                    style={{
                      width: [17, 19].includes(pokemon.id) ? 120 : 150,
                      height: [17, 19].includes(pokemon.id) ? 120 : 150,
                      position: 'absolute',
                    }}
                    source={{ uri: pokemon.avatar }}
                  />
                </View>
              </TouchableOpacity>
            ))
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  searchBar: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 30,
    borderRadius: 45,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
    borderColor: '#CCCCCC',
  },

  searchBarInput: {
    width: 280,
    fontSize: 16,
    marginLeft: 20,
    color: '#999999',
  },

  kindSortButton: {
    height: 45,
    width: 160,
    borderRadius: 49,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },

  kindSortButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700'
  },

  numberSortButton: {
    height: 45,
    width: 160,
    borderRadius: 49,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },

  numberSortButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },

  pokeList: {
    marginTop: 10,
    paddingBottom: 120,
  },

  pokeItem: {
    gap: 10,
    margin: 10,
    height: 150,
    elevation: 5,
    borderRadius: 15,
    shadowRadius: 3.84,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 2, },
  },

  pokeItemLeft: {
    paddingTop: 15,
    paddingLeft: 15,
  },

  coordinateText: {
    fontSize: 14,
    fontWeight: '700',
  },

  pokeName: {
    fontSize: 20,
    fontWeight: '700',
  },

  elementButton: {
    width: 95,
    height: 35,
    paddingLeft: 10,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  elementButtonText: {
    fontSize: 12,
    marginLeft: 20,
    fontWeight: '700',
    color: '#F5F5F7'
  },

  typeButton: {
    width: 95,
    height: 35,
    paddingLeft: 10,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  typeButtonText: {
    fontSize: 12,
    marginLeft: 20,
    fontWeight: '700',
    color: '#F5F5F7'
  },

  pokeItemRight: {
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  favoriteButton: {
    top: 5,
    right: 5,
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#FFF',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

