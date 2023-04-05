import React from 'react';
import OnboardingIndex from './resource/screens/Onboarding/onboardingIndex';
import OnboardingMain from './resource/screens/Onboarding/onboardingMain';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const PokedexStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='OnboardingIndex'>
      <Stack.Screen name="OnboardingIndex" component={OnboardingIndex} />
      <Stack.Screen name="OnboardingMain" component={OnboardingMain} />
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
