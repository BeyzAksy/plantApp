import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingStack from './onboarding-stack';
import BottomTabStack from './bottom-tab-stack';

export const Stack = createNativeStackNavigator();

function RootStack(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarStyle: 'dark',
      }}>
      <Stack.Group>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          //   component={isOnBoardingDone ? BottomTabStack : OnBoardingStack}
          component={BottomTabStack}
          name="Welcome"
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={BottomTabStack}
          name="Home"
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootStack;
