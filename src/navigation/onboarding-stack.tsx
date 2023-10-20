import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {useNavigation} from '@react-navigation/native';
import Onboarding from '../screens/onboarding';

const Stack = createNativeStackNavigator();

function OnBoardingStack(): JSX.Element {
  // const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={Onboarding}
          name="Onboarding"
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default OnBoardingStack;
