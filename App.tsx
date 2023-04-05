import React from 'react';
import OnboardingOne from './resource/screens/Onboarding/onboardingIndex';
import OnboardingTwo from './resource/screens/Onboarding/onboardingMain';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const PokedexStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='OnboardingOne'>
      <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
      <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
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
