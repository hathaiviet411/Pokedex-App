import React from 'react';

import { useState } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import {
  View,
  Text,
  Image,
  Platform,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function Dashboard() {
  const [keyword, setKeyword] = useState('');

  const handleKeyworkChange = (value) => {
    setKeyword(value);
  };

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

      <View style={{
        gap: 30,
        marginTop: 30,
        paddingTop: 20,
        borderTopWidth: 2,
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
      </View>

      <View style={styles.pokeList}>
        <ScrollView>
          <View style={styles.pokeItem}>
            <View style={styles.pokeItemLeft}>
              <Text style={styles.coordinateText}>Nº001</Text>

              <Text style={styles.pokeName}>Bulbasaur</Text>

              <View style={{ flexDirection: 'row', gap: 10 }}>
                <TouchableOpacity
                  style={styles.elementButton}
                >
                  <Image source={{ uri: '' }} />
                  <Text style={styles.elementButtonText}>Grass</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.typeButton}
                >
                  <Text style={styles.typeButtonText}>Venomous</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.pokeItemRight}>
              {/* <Image
                source={require('../../assets/images/pokemon/bulbasaur.png')}
                style={styles.pokeImage}
              /> */}
            </View>
          </View>
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
  },

  pokeItem: {
    height: 130,
    backgroundColor: '#EDF6EC',
    marginHorizontal: 10,
    borderRadius: 15,
  },

  pokeItemLeft: {
    paddingTop: 20,
    paddingLeft: 25,
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
    marginTop: 10,
    backgroundColor: '#63BC5A',
  },

  elementButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },

  typeButton: {
    marginTop: 10,
    backgroundColor: '#B567CE',
  },

  typeButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },

  pokeItemRight: {

  },

  avatar: {

  },

  background: {

  },

  favoriteButton: {

  },
});

