import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Paywall from '../screens/onboarding/paywall';
import GetStarted from '../screens/onboarding/get-started';

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
