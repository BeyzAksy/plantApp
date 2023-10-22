import React from 'react';

import {Image, TouchableOpacity, View} from 'react-native';
import {styled} from 'nativewind';
import GradientText from '../text/gradient';
import calculateResponsiveValue, {
  GRADIENT_COLORS_HEAD,
  GRADIENT_COLORS_SUB,
} from '../../constants';
import Arrow from '../../assets/icons/arrow';

const Button = styled(TouchableOpacity);
const StyledImage = styled(Image);
const StyledView = styled(View);

type ButtonProps = {
  onClick?: (e?: any) => void;
};
function PremiumButton({onClick}: ButtonProps) {
  return (
    <Button
      className="rounded-2xl bg-brown-100 w-full flex flex-row justify-center items-center"
      style={{height: calculateResponsiveValue(64, 1)}}
      onPress={onClick}>
      <StyledView className="flex-auto justify-center items-center">
        <StyledImage
          className="justify-center items-center"
          resizeMethod="scale"
          resizeMode="contain"
          source={require('../../assets/mailbox/mailbox.png')}
        />
      </StyledView>
      <StyledView className=" flex-auto flex-column">
        <GradientText
          colors={GRADIENT_COLORS_HEAD}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          nativewindStyle="font-bold leading-5 font-rubik"
          style={{fontSize: calculateResponsiveValue(16, 1)}}>
          FREE Premium Available
        </GradientText>
        <GradientText
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          colors={GRADIENT_COLORS_SUB}
          nativewindStyle="text-13 leading-4 font-rubik"
          style={{fontSize: calculateResponsiveValue(13, 1)}}>
          Tap to upgrade your account!
        </GradientText>
      </StyledView>
      <StyledView className="flex-auto justify-center items-center">
        <Arrow />
      </StyledView>
    </Button>
  );
}

export default PremiumButton;
