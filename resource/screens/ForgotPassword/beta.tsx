import React from 'react';
import Toast from 'react-native-toast-message';

import Navbar from '../../layout/Navbar/index';

import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export interface props {
  navigation: any,
};

export default function BetaForgotPassword(props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityStatus, setSecurityStatus] = useState(true);
  const [securityConfirmStatus, setSecurityConfirmStatus] = useState(true);

  const handleSecurityStatusChange = () => {
    setSecurityStatus(!securityStatus);
  };

  const handleSecurityConfirmStatusChange = () => {
    setSecurityConfirmStatus(!securityConfirmStatus);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  const handleValidatePasswords = () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: 'pokeToastWarning',
        props: {
          title: 'Password not match',
          content: 'Please check your passwords again!',
        }
      });
    } else {
      props.navigation.navigate('Loading', { nextScreen: 'SuccessForgotPassword' });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50, width: '100%' }}>
        <Navbar screenName={'RESET PASSWORD'} navigation={props['navigation']} />
      </View>

      <View style={{ flex: 8, width: '100%' }}>
        <Text style={styles.title}>You're almost there!</Text>
        <Text style={styles.subTitle}>Enter your new password</Text>

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

        <Text style={styles.labelText}>Confirm Password</Text>

        <View style={{ flexDirection: 'row' }}>
          <TextInput
            value={confirmPassword}
            autoCorrect={false}
            style={styles.passwordInput}
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry={securityConfirmStatus}
            placeholderTextColor={'#999999'}
            onChangeText={handleConfirmPasswordChange}
          />

          <View style={styles.buttonSecurity}>
            <TouchableOpacity onPress={() => { handleSecurityConfirmStatusChange() }}>
              <Entypo name={securityConfirmStatus ? 'eye-with-line' : 'eye'} size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flex: 2, width: '100%' }}>
        {
          password.length > 0 && confirmPassword.length > 0 ? (
            <TouchableOpacity style={styles.buttonActive} onPress={() => { handleValidatePasswords() }}>
              <Text style={styles.buttonTextActive}>Submit</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.buttonInactive}>
              <Text style={styles.buttonTextInactive}>Submit</Text>
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

