import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import RootStack from './src/navigation/root-stack';
import {persistor, store} from './src/data';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function App(): JSX.Element {
  const navigationRef = useNavigationContainerRef();
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <StoreProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer ref={navigationRef} theme={theme}>
              <RootStack />
            </NavigationContainer>
          </PersistGate>
        </StoreProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
