import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Tabs from '../../layout/BottomNavigation';

export default function Test() {
  return (
    <NavigationContainer independent={true}>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})