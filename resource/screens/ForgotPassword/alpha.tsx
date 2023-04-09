import React from 'react';

import Navbar from '../../layout/Navbar/index';

import { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export interface props {
  navigation: any,
};

export default function AlphaForgotPassword(props) {
  const [timer, setTimer] = useState(60);

  const firstDigitRef = useRef(null);
  const secondDigitRef = useRef(null);
  const thirdDigitRef = useRef(null);
  const fourthDigitRef = useRef(null);
  const fifthDigitRef = useRef(null);
  const sixthDigitRef = useRef(null);

  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');
  const [thirdDigit, setThirdDigit] = useState('');
  const [fourthDigit, setFourthDigit] = useState('');
  const [fifthDigit, setFifthDigit] = useState('');
  const [sixthDigit, setSixthDigit] = useState('');

  const handleFirstDigitChange = (value) => {
    if (value) {
      setFirstDigit(value);
      secondDigitRef.current.focus();
    } else {
      setFirstDigit(value);
    }
  };

  const handleSecondDigitChange = (value) => {
    if (value) {
      setSecondDigit(value);
      thirdDigitRef.current.focus();
    } else {
      setSecondDigit(value);
      firstDigitRef.current.focus();
    }
  };

  const handleThirdDigitChange = (value) => {
    if (value) {
      setThirdDigit(value);
      fourthDigitRef.current.focus();
    } else {
      setThirdDigit(value);
      secondDigitRef.current.focus();
    }
  };

  const handleFourthDigitChange = (value) => {
    if (value) {
      setFourthDigit(value);
      fifthDigitRef.current.focus();
    } else {
      setFourthDigit(value);
      thirdDigitRef.current.focus();
    }
  };

  const handleFifthDigitChange = (value) => {
    if (value) {
      setFifthDigit(value);
      sixthDigitRef.current.focus();
    } else {
      setFifthDigit(value);
      fourthDigitRef.current.focus();
    }
  };

  const handleSixthDigitChange = (value) => {
    if (value) {
      setSixthDigit(value);
    } else {
      setSixthDigit(value);
      fifthDigitRef.current.focus();
    }
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      setTimer(60);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50, width: '100%' }}>
        <Navbar screenName={'RECOVERY PASSWORD'} navigation={props['navigation']} />
      </View>

      <View style={{ flex: 8, width: '100%' }}>
        <Text style={styles.subTitle}>Enter the code</Text>

        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
          <Text style={{ color: '#666666', fontSize: 20 }}>Enter the 6-digit code sent to</Text>
          <Text style={{ color: '#000000', fontWeight: '700', marginTop: 5, fontSize: 16 }}>meuemail@gmail.com</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TextInput
            maxLength={1}
            placeholder=""
            value={firstDigit}
            autoCorrect={false}
            ref={firstDigitRef}
            style={styles.input}
            autoCapitalize="none"
            placeholderTextColor={'#999999'}
            onChangeText={handleFirstDigitChange}
          />

          <TextInput
            maxLength={1}
            placeholder=""
            value={secondDigit}
            autoCorrect={false}
            style={styles.input}
            ref={secondDigitRef}
            autoCapitalize="none"
            placeholderTextColor={'#999999'}
            onChangeText={handleSecondDigitChange}
          />

          <TextInput
            maxLength={1}
            placeholder=""
            value={thirdDigit}
            autoCorrect={false}
            ref={thirdDigitRef}
            style={styles.input}
            autoCapitalize="none"
            placeholderTextColor={'#999999'}
            onChangeText={handleThirdDigitChange}
          />

          <TextInput
            maxLength={1}
            placeholder=""
            value={fourthDigit}
            autoCorrect={false}
            style={styles.input}
            ref={fourthDigitRef}
            autoCapitalize="none"
            placeholderTextColor={'#999999'}
            onChangeText={handleFourthDigitChange}
          />

          <TextInput
            maxLength={1}
            placeholder=""
            value={fifthDigit}
            autoCorrect={false}
            ref={fifthDigitRef}
            style={styles.input}
            autoCapitalize="none"
            placeholderTextColor={'#999999'}
            onChangeText={handleFifthDigitChange}
          />

          <TextInput
            maxLength={1}
            placeholder=""
            value={sixthDigit}
            autoCorrect={false}
            ref={sixthDigitRef}
            style={styles.input}
            autoCapitalize="none"
            placeholderTextColor={'#999999'}
            onChangeText={handleSixthDigitChange}
          />
        </View>

        <Text style={styles.inputDescription}>
          Didn't receive the code?
        </Text>

        <Text style={{ fontWeight: '700', color: '#4D4D4D', textAlign: 'center', fontSize: 16 }}>
          Resend in {minutes}:{seconds < 10 ? "0" + seconds : seconds}
        </Text>
      </View>

      <View style={{ flex: 2, width: '100%' }}>
        {
          firstDigit.length > 0 &&
            secondDigit.length > 0 &&
            thirdDigit.length > 0 &&
            fourthDigit.length > 0 &&
            fifthDigit.length > 0 &&
            sixthDigit.length > 0
            ? (
              <TouchableOpacity style={styles.buttonActive} onPress={() => { }}>
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
    width: 50,
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    paddingLeft: 18,
    borderRadius: 5,
    color: '#493d8a',
    fontWeight: '500',
    marginHorizontal: 10,
    borderColor: '#999999',
  },

  inputDescription: {
    fontSize: 18,
    marginTop: 10,
    color: '#999999',
    textAlign: 'center',
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

