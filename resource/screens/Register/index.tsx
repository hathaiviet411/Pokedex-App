import * as React from 'react';

import Navbar from '../../layout/Navbar/index';

import { Text, View, StyleSheet } from 'react-native';

export interface props {
  navigation: any,
}

export default function Register(props) {
  return (
    <View style={styles.container}>
      <Navbar screenName={'Register'} navigation={props['navigation']} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
