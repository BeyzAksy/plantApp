import React from 'react';

import {Platform, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {styled} from 'nativewind';

import Home from '../screens/home';
import ScanPlant from '../screens/scan-plant';
import MyGarden from '../screens/my-garden';
import Profile from '../screens/profile';
import CustomHeader from '../components/custom-header';
import HomeIcon from '../assets/icons/home';
import DiagnoseIcon from '../assets/icons/diagnose';
import Garden from '../assets/icons/garden';
import Scan from '../assets/icons/scan';
import ProfileIcon from '../assets/icons/profile';
import calculateResponsiveValue from '../constants';
import Diagnose from '../screens/diagnose';
import {useNavigation} from '@react-navigation/native';

type BottomTabItem = {
  name: string;
  key: string;
  component: React.ComponentType<any>;
  options?: {
    headerShown?: boolean;
    headerTitle?: string;
    tabBarShowLabel?: boolean;
    header?: any;
  };
};

const BottomTabNavigator = createBottomTabNavigator();
const StyledText = styled(Text);
const ScanButton = styled(TouchableOpacity);

const BottomTabItems: BottomTabItem[] = [
  {
    name: 'Home',
    key: 'Home',
    component: Home,
    options: {
      headerShown: true,
      headerTitle: '',
      header: () => <CustomHeader />,
    },
  },
  {
    name: 'Diagnose',
    key: 'Diagnose',
    component: Diagnose,
    options: {
      headerTitle: '',
    },
  },
  {
    name: 'ScanPlant',
    key: 'ScanPlant',
    component: ScanPlant,
    options: {
      headerTitle: '',
    },
  },
  {
    name: 'MyGarden',
    key: 'MyGarden',
    component: MyGarden,
    options: {
      headerTitle: '',
    },
  },
  {
    name: 'Profile',
    key: 'Profile',
    component: Profile,
    options: {
      headerTitle: '',
    },
  },
];

function BottomTabStack(): JSX.Element {
  const navigation = useNavigation();
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        tabBarStyle: {
          padding: calculateResponsiveValue(15, 1),
          height: calculateResponsiveValue(85, 1),
        },
      }}>
      {BottomTabItems.map(tab => (
        <BottomTabNavigator.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={({route}) => ({
            ...tab.options,
            tabBarLabel: ({focused}) =>
              route.name === 'ScanPlant' ? (
                ''
              ) : (
                <StyledText
                  className={`${
                    focused ? 'text-green-400' : 'text-gray-100'
                  } text-xs ${Platform.OS === 'android' ? 'mb-4' : ''}`}>
                  {tab.name}
                </StyledText>
              ),
            tabBarIcon: ({focused}) => {
              if (route.name === 'Home') {
                return (
                  <HomeIcon color={`${focused ? '#28AF6E' : '#BDBDBD'}`} />
                );
              } else if (route.name === 'Diagnose') {
                return (
                  <DiagnoseIcon color={`${focused ? '#28AF6E' : '#BDBDBD'}`} />
                );
              } else if (route.name === 'ScanPlant') {
                return (
                  <ScanButton
                    onPress={() => navigation.navigate('ScanPlant')}
                    className="border-green-200 bg-green-400 border-4 absolute z-0 rounded-full justify-center items-center"
                    style={{
                      bottom: calculateResponsiveValue(5, 2),
                      width: calculateResponsiveValue(64, 1),
                      height: calculateResponsiveValue(64, 1),
                    }}>
                    <Scan size={25} />
                  </ScanButton>
                );
              } else if (route.name === 'MyGarden') {
                return <Garden color={`${focused ? '#28AF6E' : '#BDBDBD'}`} />;
              } else if (route.name === 'Profile') {
                return (
                  <ProfileIcon color={`${focused ? '#28AF6E' : '#BDBDBD'}`} />
                );
              }
            },
          })}
        />
      ))}
    </BottomTabNavigator.Navigator>
  );
}

export default BottomTabStack;
