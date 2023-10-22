import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Paywall from '../screens/paywall/';
import GetStarted from '../screens/get-started/';
import Onboarding from '../screens/onboarding';

const Stack = createNativeStackNavigator();

function OnBoardingStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={GetStarted}
          name="GetStarted"
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={Onboarding}
          name="Onboarding"
        />
        <Stack.Screen
          options={{
            statusBarStyle: 'light',
            headerShown: false,
          }}
          component={Paywall}
          name="Paywall"
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default OnBoardingStack;
