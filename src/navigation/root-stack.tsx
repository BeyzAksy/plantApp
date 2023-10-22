import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingStack from './onboarding-stack';
import BottomTabStack from './bottom-tab-stack';

export const Stack = createNativeStackNavigator();

function RootStack(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          // component={isOnBoardingDone ? BottomTabStack : OnBoardingStack}
          component={BottomTabStack}
          name="Welcome"
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={OnBoardingStack}
          name="Onboarding"
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStack;
