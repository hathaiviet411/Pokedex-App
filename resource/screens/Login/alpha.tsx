import React from 'react';

import Navbar from '../../layout/Navbar/index';

import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export interface props {
  navigation: any,
};

export default function AlphaLogin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securityStatus, setSecurityStatus] = useState(true);

  const handleSecurityStatusChange = () => {
    setSecurityStatus(!securityStatus);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const navigateToBetaRegister = () => {
    props.navigation.navigate('BetaRegister');
  };

  const navigateToForgotPassword = () => {
    props.navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50, width: '100%' }}>
        <Navbar screenName={'LOGIN'} navigation={props['navigation']} />
      </View>

      <View style={{ flex: 8, width: '100%' }}>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subTitle}>Fill in the information</Text>

        <Text style={styles.labelText}>Email</Text>

        <TextInput
          value={email}
          autoCorrect={false}
          placeholder="Email"
          style={styles.input}
          autoCapitalize="none"
          onChangeText={handleEmailChange}
          placeholderTextColor={'#999999'}
        />

        <Text style={styles.labelText}>Password</Text>

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            value={password}
            autoCorrect={false}
            style={styles.passwordInput}
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry={securityStatus}
            placeholderTextColor={'#999999'}
            onChangeText={handlePasswordChange}
          />

          <View style={styles.buttonSecurity}>
            <TouchableOpacity onPress={() => { handleSecurityStatusChange() }}>
              <Entypo name={securityStatus ? 'eye-with-line' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => { navigateToForgotPassword() }}
          style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={{ color: '#493d8a', fontWeight: '700', fontSize: 16 }}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 2, width: '100%' }}>
        {
          email.length > 0 && password.length > 0 ? (
            <TouchableOpacity style={styles.buttonActive} onPress={() => { navigateToBetaRegister() }}>
              <Text style={styles.buttonTextActive}>Login</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonInactive}>
              <Text style={styles.buttonTextInactive}>Login</Text>
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

  labelText: {
    fontSize: 16,
    marginTop: 20,
    marginLeft: 20,
    color: '#999999',
    marginBottom: 10,
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

  passwordInput: {
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

