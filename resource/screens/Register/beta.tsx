import React from 'react';

import Navbar from '../../layout/Navbar/index';

import { Entypo } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export interface props {
  navigation: any,
};

export default function BetaRegister(props) {
  const [password, setPassword] = useState('');
  const [securityStatus, setSecurityStatus] = useState(true);

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSecurityStatusChange = () => {
    setSecurityStatus(!securityStatus);
  };

  const navigateToCharlieRegister = () => {
    props.navigation.navigate('CharlieRegister');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50, width: '100%' }}>
        <Navbar screenName={'REGISTER'} navigation={props['navigation']} />
      </View>

      <View style={{ flex: 8, width: '100%' }}>
        <Text style={styles.title}>Now...</Text>
        <Text style={styles.subTitle}>Create a password</Text>

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.input}
            onChangeText={handlePasswordChange}
            value={password}
            placeholder="Password"
            secureTextEntry={securityStatus}
            placeholderTextColor={'#999999'}
          />

          <View style={styles.buttonSecurity}>
            <TouchableOpacity onPress={() => { handleSecurityStatusChange() }}>
              <Entypo name={securityStatus ? 'eye-with-line' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.inputDescription}>
          *Your password must be at least 8 characters long.
        </Text>
      </View>

      <View style={{ flex: 2, width: '100%' }}>
        {
          password.length > 0 ? (
            <TouchableOpacity style={styles.buttonActive} onPress={() => { navigateToCharlieRegister() }}>
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
    width: '80%',
    marginLeft: 20,
    paddingLeft: 15,
    borderRadius: 5,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
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
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#173EA5',
  },

  buttonInactive: {
    height: 60,
    marginTop: 40,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
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

  buttonSecurity: {
    width: 50,
    height: 60,
    marginLeft: -3,
    borderTopWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    justifyContent: 'center',
    borderBottomRightRadius: 5,
  },
});

