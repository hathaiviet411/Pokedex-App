import React from 'react';

import Navbar from '../../layout/Navbar/index';

import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export interface props {
  navigation: any,
};

export default function AlphaRegister(props) {
  const [email, setEmail] = useState('');

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const navigateToBetaRegister = () => {
    props.navigation.navigate('BetaRegister');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50, width: '100%' }}>
        <Navbar screenName={'REGISTER'} navigation={props['navigation']} />
      </View>

      <View style={{ flex: 8, width: '100%' }}>
        <Text style={styles.title}>Let's start!</Text>
        <Text style={styles.subTitle}>What is your email?</Text>

        <TextInput
          value={email}
          autoCorrect={false}
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          onChangeText={handleEmailChange}
          placeholderTextColor={'#999999'}
        />

        <Text style={styles.inputDescription}>
          *Please use a valid email address.
        </Text>
      </View>

      <View style={{ flex: 2, width: '100%' }}>
        {
          email.length > 0 ? (
            <TouchableOpacity style={styles.buttonActive} onPress={() => { navigateToBetaRegister() }}>
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

