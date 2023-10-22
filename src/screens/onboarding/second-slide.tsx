import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {styled} from 'nativewind';
import P from '../../components/text/p';
import calculateResponsiveValue, {SCREEN_WIDTH} from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BrushText from '../../components/text/brush';

const Background = styled(ImageBackground);
const StyledImage = styled(Image);
const StyledView = styled(View);

function SecondSlide(): JSX.Element {
  const {top} = useSafeAreaInsets();

  return (
    <Background
      className="flex-row justify-center h-full"
      resizeMethod="scale"
      resizeMode="cover"
      source={require('../../assets/onboarding-bg-2/onboarding-bg-2.png')}>
      <StyledView
        style={{
          paddingTop: calculateResponsiveValue(20, 1) + top,
        }}>
        <StyledView className="flex-row px-3">
          <P
            style={{fontSize: calculateResponsiveValue(28, 1)}}
            nativewindStyle="font-bold">
            Get Plant{' '}
          </P>
          <BrushText text={'care guides'} position={SCREEN_WIDTH / 2 - 55} />
        </StyledView>
        <StyledImage source={require('../../assets/leaf-bg/leaf-bg.png')} />
        <StyledImage
          style={{
            width: calculateResponsiveValue(261, 1),
            height: calculateResponsiveValue(540, 1),
            transform: [{translateX: 50}, {translateY: 150}],
          }}
          className="absolute pb-10"
          source={require('../../assets/flat-iphone/flat-iphone.png')}
        />
      </StyledView>
    </Background>
  );
}
export default SecondSlide;
