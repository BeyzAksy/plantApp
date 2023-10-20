import React from 'react';
import {ImageBackground, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styled} from 'nativewind';

import Heading from '../text/heading';
import calculateResponsiveValue from '../../constants';
import P from '../text/p';
import SearchInput from '../inputs/search';

const Container = styled(View);
const Background = styled(ImageBackground);

const CustomHeader = (): JSX.Element => {
  const {top} = useSafeAreaInsets();

  return (
    <Background
      style={{
        width: '100%',
        height: calculateResponsiveValue(180, 1),
        paddingTop: top,
      }}
      source={require('../../assets/header-bg/header-bg.png')}>
      <Container className="flex-1 px-6 pb-2 justify-center">
        <Container className="justify-center pb-2 ">
          <P nativewindStyle="leading-6 font-rubik">Hi, Plant Lover!</P>
          <Heading>Good Afternoon! ⛅</Heading>
        </Container>
        <SearchInput placeholder="Search for plants" />
      </Container>
    </Background>
  );
};

export default CustomHeader;
