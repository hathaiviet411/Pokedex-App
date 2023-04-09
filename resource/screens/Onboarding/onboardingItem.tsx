import React from 'react';


import { Platform } from 'expo-modules-core';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, Image, StyleSheet, useWindowDimensions, } from 'react-native';

export default function onboardingItem({ item, onChangeCurrentPage, navigation }) {
  const { width } = useWindowDimensions();

  const handleButtonClick = (buttonType, page) => {
    if (buttonType === 0) {
      onChangeCurrentPage(page);
    } else {
      navigateToRegister();
    }
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
  }

  const navigateToLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={[styles.container, { width }]}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        {
          item['buttonType'] === 1 ? (
            <View style={{ position: 'absolute', top: 10, right: 0 }}>
              <TouchableOpacity
                style={styles.buttonLater}
                onPress={() => { }}
              >
                <Text style={styles.buttonLaterText}>Skip</Text>
                <AntDesign name="arrowright" size={18} color="#173EA5" style={{ lineHeight: 18, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ) : (
            <View />
          )
        }

        <Image
          source={{ uri: item['image'] }}
          style={[styles.image, { width, resizeMode: 'contain' }]}
        />

        <Text style={styles.title}>{item['title']}</Text>
        <Text style={styles.content}>{item['content']}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleButtonClick(item['buttonType'], item['id'])
          }}>
          <Text style={styles.buttonText}>{item['buttonText']}</Text>
        </TouchableOpacity>

        {
          item['buttonType'] === 1 ? (
            <View style={styles.alreadyHaveAccount}>
              <TouchableOpacity
                onPress={() => { navigateToLogin() }}
              >
                <Text style={styles.alreadyHaveAccountText}>I already have an account</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View />
          )
        }
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 40 : 30,
  },

  image: {
    height: 250,
    marginBottom: 50,
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
    marginTop: 50,
    borderRadius: 50,
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#173EA5',
  },

  buttonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '700',
  },

  buttonLater: {
    height: 45,
    width: 120,
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  buttonLaterText: {
    fontSize: 16,
    color: '#173EA5',
    fontWeight: '700',
  },

  alreadyHaveAccount: {
    marginTop: 30,
    alignItems: 'center',
  },

  alreadyHaveAccountText: {
    fontSize: 16,
    color: '#173EA5',
    fontWeight: '700',
  }
})