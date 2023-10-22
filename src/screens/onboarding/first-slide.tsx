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

function FirstSlide(): JSX.Element {
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
            Take a photo to{' '}
          </P>
          <BrushText text={'identify'} position={SCREEN_WIDTH / 2 + 25} />
        </StyledView>
        <P
          style={{fontSize: calculateResponsiveValue(28, 1)}}
          nativewindStyle="font-bold px-4">
          the plant!
        </P>
        <StyledImage
          source={require('../../assets/scan-plant/scan-plant.png')}
        />
      </StyledView>
    </Background>
  );
}
export default FirstSlide;
