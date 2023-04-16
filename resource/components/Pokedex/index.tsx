import React, { useRef, useEffect } from 'react';

import pokemonList from './pokemon-list';

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
  const [isShowHeader, setIsShowHeader] = useState(true);

  const translateY = useRef(new Animated.Value(0)).current;
  let scrollY = 0;

  const handleKeyworkChange = (value) => {
    setKeyword(value);
  };

  const handleClickFavoriteButton = (id) => {
    const newPokemonList = pokeList.map((pokemon) => {
      if (pokemon.id === id) {
        return {
          ...pokemon,
          favorite: !pokemon.favorite,
        };
      }

      return pokemon;
    });

    setPokeList(newPokemonList);
  };

  const handleScroll = (event) => {
    const newScrollY = event.nativeEvent.contentOffset.y;
    const deltaY = newScrollY - scrollY;
    scrollY = newScrollY;

    if (scrollY <= 0) {
      setIsShowHeader(true);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else if (deltaY > 0) {
      setIsShowHeader(false);
      Animated.timing(translateY, {
        toValue: -10000,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setIsShowHeader(true);
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    setPokeList(pokemonList);
  }, [])

  return (
    <SafeAreaView style={[styles.container, { paddingTop: Platform.OS === 'ios' ? 50 : 40 }]}>
      <View style={styles.searchBar}>
        <AntDesign name="search1" size={32} color="#666666" />
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
        marginTop: isShowHeader ? 30 : 0,
        paddingTop: isShowHeader ? 20 : 0,
        borderTopWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
        height: isShowHeader ? 60 : 0,
        borderColor: '#F2F2F2',
        justifyContent: 'center',
        transform: [{ translateY }]
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
        <ScrollView onScroll={handleScroll}>
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
                      <Image
                        style={{
                          left: 5,
                          width: 30,
                          height: 30,
                          position: 'absolute',
                        }}
                        source={{ uri: pokemon.elementImage }}
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
                              width: 30,
                              height: 30,
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
                      size={24}
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
    height: 65,
    borderWidth: 2,
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
    height: 55,
    width: 180,
    borderRadius: 49,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },

  kindSortButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700'
  },

  numberSortButton: {
    height: 55,
    width: 180,
    borderRadius: 49,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
  },

  numberSortButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },

  pokeList: {
    marginTop: 20,
    paddingBottom: 100,
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
    paddingTop: 20,
    paddingLeft: 15,
  },

  coordinateText: {
    fontSize: 18,
    fontWeight: '700',
  },

  pokeName: {
    fontSize: 26,
    marginTop: 5,
    fontWeight: '700',
  },

  elementButton: {
    width: 115,
    height: 40,
    paddingLeft: 10,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  elementButtonText: {
    fontSize: 13,
    marginLeft: 30,
    fontWeight: '700',
    color: '#F5F5F7'
  },

  typeButton: {
    width: 115,
    height: 40,
    paddingLeft: 10,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  typeButtonText: {
    fontSize: 13,
    marginLeft: 30,
    fontWeight: '700',
    color: '#F5F5F7'
  },

  pokeItemRight: {
    width: 150,
    height: '100%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  favoriteButton: {
    top: 5,
    right: 5,
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#FFF',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

