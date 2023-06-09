import React from 'react';

import Navbar from '../../layout/Navbar/index';

import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export interface props {
  navigation: any,
};

export default function CharlieRegister(props) {
  const [name, setName] = useState('');

  const handleChangeName = (value) => {
    setName(value);
  };

  const handleCreateAccount = () => {
    props.navigation.navigate('Loading', { nextScreen: 'SuccessRegister' });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50, width: '100%' }}>
        <Navbar screenName={'REGISTER'} navigation={props['navigation']} />
      </View>

      <View style={{ flex: 8, width: '100%' }}>
        <Text style={styles.title}>You almost there!</Text>
        <Text style={styles.subTitle}>What is your name?</Text>

        <TextInput
          value={name}
          placeholder="Name"
          autoCorrect={false}
          style={styles.input}
          autoCapitalize="none"
          onChangeText={handleChangeName}
          placeholderTextColor={'#999999'}
        />

        <Text style={styles.inputDescription}>
          *This will be your in-app username.
        </Text>
      </View>

      <View style={{ flex: 2, width: '100%' }}>
        {
          name.length > 0 ? (
            <TouchableOpacity style={styles.buttonActive} onPress={() => { handleCreateAccount() }}>
              <Text style={styles.buttonTextActive}>Continue</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonInactive}>
              <Text style={styles.buttonTextInactive}>Continue</Text>
            </View>
          )
        }
      </View>
    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    marginBottom: 20,
    color: '#999999',
    textAlign: 'center',
  },

  subTitle: {
    fontSize: 26,
    marginBottom: 20,
    color: '#493d8a',
    fontWeight: '800',
    textAlign: 'center',
  },

  input: {
    height: 60,
    fontSize: 18,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 5,
    marginHorizontal: 20,
    borderColor: '#999999',
  },

  inputDescription: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 20,
    color: '#999999',
    textAlign: 'left',
  },

  buttonActive: {
    height: 60,
    marginTop: 40,
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#173EA5',
  },

  buttonInactive: {
    height: 60,
    marginTop: 40,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 20,
    borderColor: '#DBDCDD',
    justifyContent: 'center',
    backgroundColor: '#E6E6E6',
  },

  buttonTextActive: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },

  buttonTextInactive: {
    fontSize: 18,
    color: '#4D4D4D',
    fontWeight: '700',
  },
});

