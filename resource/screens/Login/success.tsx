import * as React from 'react';
import Lottie from 'lottie-react-native';

import { useState, useRef } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
export interface props {
  navigation: any,
}

export default function SuccessLogin(props) {
  const lottieRef = useRef(null);

  const [isShowSuccessAni, setIsShowSuccessAni] = useState(true);

  const handleChangeShowSuccessAni = () => {
    lottieRef.current.reset();
    setIsShowSuccessAni(false);
  };

  const navigateToDashboard = () => {
    props.navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50, width: '100%' }} />

      <View style={{ flex: 9, width: '100%' }}>
        {
          isShowSuccessAni ? (
            <Lottie
              ref={lottieRef}
              source={require('../../../public/lottifiles-json/congrat.json')}
              autoPlay
              loop={false}
              onAnimationFinish={handleChangeShowSuccessAni}
            />
          ) : (
            <View />
          )
        }

        <Image
          style={{ height: 300, resizeMode: 'contain' }}
          source={{ uri: 'https://raw.githubusercontent.com/nonamelittlefox/Pokedex-App/master/public/images/loading-success.png' }}
        />

        <Text style={styles.title}>Welcome back, Trainer!</Text>

        <Text style={styles.content}>We hope you've had a long journey since your last visit.</Text>

        <TouchableOpacity style={[styles.buttonEmail, { marginTop: 50 }]} onPress={() => { navigateToDashboard() }}>
          <Text style={styles.buttonEmailText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    marginTop: 50,
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

  buttonEmail: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    marginHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#173EA5',
  },

  buttonEmailText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
});
