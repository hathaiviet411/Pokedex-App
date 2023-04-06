import React from 'react';

import Login from './resource/screens/Login/index';
import Register from './resource/screens/Register/index';
import AlphaRegister from './resource/screens/Register/alpha';
import OnboardingMain from './resource/screens/Onboarding/onboardingMain';
import OnboardingIndex from './resource/screens/Onboarding/onboardingIndex';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const PokedexStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='OnboardingIndex'>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="AlphaRegister" component={AlphaRegister} />
      <Stack.Screen name="OnboardingMain" component={OnboardingMain} />
      <Stack.Screen name="OnboardingIndex" component={OnboardingIndex} />
    </Stack.Navigator>
  );
}

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <PokedexStack />
    </NavigationContainer>
  );
}

export default function App(props) {
  return (
    <RootNavigation />
  );
}
