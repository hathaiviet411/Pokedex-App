import * as React from 'react';

import Navbar from '../../layout/Navbar/index';

import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
export interface props {
  navigation: any,
}

export default function Login(props) {
  const navigateToAlphaLogin = () => {
    props.navigation.navigate('AlphaLogin');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50, width: '100%' }}>
        <Navbar screenName={'LOGIN'} navigation={props['navigation']} />
      </View>

      <View style={{ flex: 9, width: '100%' }}>
        <Image
          style={{ height: 300, resizeMode: 'contain' }}
          source={{ uri: 'https://raw.githubusercontent.com/nonamelittlefox/Pokedex-App/develop/public/images/login.png' }}
        />

        <Text style={styles.title}>Good to see you here again!</Text>

        <Text style={styles.content}>How do you want to connect?</Text>

        <TouchableOpacity style={[styles.button, { marginTop: 60 }]}>
          <Image
            resizeMode='contain'
            style={{ height: 36, width: 36, marginRight: 10 }}
            source={{ uri: 'https://raw.githubusercontent.com/nonamelittlefox/Pokedex-App/develop/public/images/apple-vector.png' }}
          />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { marginTop: 15 }]}>
          <Image
            resizeMode='contain'
            style={{ height: 36, width: 36, marginRight: 10 }}
            source={{ uri: 'https://raw.githubusercontent.com/nonamelittlefox/Pokedex-App/develop/public/images/google-vector.png' }}
          />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.buttonEmail, { marginTop: 15 }]} onPress={() => { navigateToAlphaLogin() }}>
          <Text style={styles.buttonEmailText}>Continue with an email</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    marginBottom: 20,
    color: '#493d8a',
    fontWeight: '800',
    textAlign: 'center',
    paddingHorizontal: 34,
  },

  content: {
    fontSize: 16,
    color: '#62656b',
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 44,
  },

  button: {
    height: 60,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 36,
    borderColor: '#DBDCDD',
    justifyContent: 'flex-start',
    paddingLeft: 30,
  },

  buttonText: {
    fontSize: 16,
    color: '#4D4D4D',
    fontWeight: '700',
    marginLeft: 20,
  },

  buttonEmail: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 36,
    justifyContent: 'center',
    backgroundColor: '#173EA5',

  },

  buttonEmailText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',

  },
});
