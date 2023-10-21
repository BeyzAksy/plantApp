import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Paywall from '../screens/onboarding/paywall';

const Stack = createNativeStackNavigator();

function OnBoardingStack(): JSX.Element {
  // const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Group>
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
