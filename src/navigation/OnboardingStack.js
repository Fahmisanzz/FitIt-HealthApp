import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import GenderScreen from '../screens/onboarding/GenderScreen';
import BirthdateScreen from '../screens/onboarding/BirthdateScreen';
import WeightScreen from '../screens/onboarding/WeightScreen';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyle: { backgroundColor: '#ffffff' },
      }}
    >
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen}
        options={{ animationEnabled: false }}
      />
      <Stack.Screen 
        name="Gender" 
        component={GenderScreen}
      />
      <Stack.Screen 
        name="Birthdate" 
        component={BirthdateScreen}
      />
      <Stack.Screen 
        name="Weight" 
        component={WeightScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
