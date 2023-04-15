import React from 'react';
import LottieView from 'lottie-react-native';
import Toast from 'react-native-toast-message';

import Login from './resource/screens/Login/index';
import Register from './resource/screens/Register/index';
import AlphaRegister from './resource/screens/Register/alpha';
import BetaRegister from './resource/screens/Register/beta';
import CharlieRegister from './resource/screens/Register/charlie';
import Loading from './resource/components/Loading';
import AlphaLogin from './resource/screens/Login/alpha';
import SuccessLogin from './resource/screens/Login/success';
import ForgotPassword from './resource/screens/ForgotPassword';
import AlphaForgotPassword from './resource/screens/ForgotPassword/alpha';
import BetaForgotPassword from './resource/screens/ForgotPassword/beta';
import SuccessForgotPassword from './resource/screens/ForgotPassword/success';
import SuccessRegister from './resource/screens/Register/success';
import OnboardingMain from './resource/screens/Onboarding/onboardingMain';
import OnboardingIndex from './resource/screens/Onboarding/onboardingIndex';
import Dashboard from './resource/screens/Dashboard/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Platform } from 'react-native';

const pokeToastConfig = {
  pokeToastWarning: ({ props }) => (
    <View style={styles.pokeWarningToast}>
      <Text style={styles.titleWarning}>{props.title}</Text>
      <Text style={styles.contentWarning}>{props.content}</Text>

      <LottieView
        source={require('./public/lottifiles-json/squid.json')}
        autoPlay
        loop
        style={{ flex: 1, left: -80 }}
      />
    </View>
  ),

  pokeToastSuccess: ({ props }) => (
    <View style={styles.pokeSuccessToast}>
      <Text style={styles.titleSuccess}>{props.title}</Text>
      <Text style={styles.contentSuccess}>{props.content}</Text>

      <LottieView
        source={require('./public/lottifiles-json/squid.json')}
        autoPlay
        loop
        style={{ flex: 1, left: -90 }}
      />
    </View>
  )
};

const Stack = createStackNavigator();

const PokedexStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='OnboardingIndex'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="AlphaRegister" component={AlphaRegister} />
      <Stack.Screen name="BetaRegister" component={BetaRegister} />
      <Stack.Screen name="CharlieRegister" component={CharlieRegister} />
      <Stack.Screen name="SuccessRegister" component={SuccessRegister} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="AlphaLogin" component={AlphaLogin} />
      <Stack.Screen name="SuccessLogin" component={SuccessLogin} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="AlphaForgotPassword" component={AlphaForgotPassword} />
      <Stack.Screen name="BetaForgotPassword" component={BetaForgotPassword} />
      <Stack.Screen name="SuccessForgotPassword" component={SuccessForgotPassword} />
      <Stack.Screen name="OnboardingMain" component={OnboardingMain} />
      <Stack.Screen name="OnboardingIndex" component={OnboardingIndex} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <PokedexStack />
    </NavigationContainer>
  );
};

export default function App(props) {
  return (
    <>
      <RootNavigation />

      <Toast
        position='top'
        autoHide={true}
        visibilityTime={3000}
        config={pokeToastConfig}
        topOffset={Platform.OS === 'ios' ? 60 : 20}
      />
    </>
  );
};

const styles = StyleSheet.create({
  pokeWarningToast: {
    flex: 1,
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9D949',
  },

  pokeSuccessToast: {
    flex: 1,
    height: 80,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AACB73',
  },

  titleWarning: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  contentWarning: {
    fontSize: 14,
    marginTop: 10,
    color: '#000',
  },

  titleSuccess: {
    fontSize: 16,
    color: '#000',
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  contentSuccess: {
    fontSize: 14,
    marginTop: 10,
    color: '#000',
  },
});
