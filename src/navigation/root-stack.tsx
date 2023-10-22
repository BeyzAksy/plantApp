import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingStack from './onboarding-stack';
import BottomTabStack from './bottom-tab-stack';
import {useFirstLaunch} from '../data/hooks';

export const Stack = createNativeStackNavigator();

function RootStack(): JSX.Element {
  const {isFirstLaunch} = useFirstLaunch();

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          component={isFirstLaunch ? OnBoardingStack : BottomTabStack}
          name="Home"
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
