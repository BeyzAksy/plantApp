import React from 'react';

import {styled} from 'nativewind';
import {Image, Text, View} from 'react-native';
import calculateResponsiveValue from '../../constants';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

interface BrushTextProps {
  text: string;
  position: number;
}

function BrushText({text, position}: BrushTextProps) {
  return (
    <StyledView
      style={{
        left: position,
        marginTop: calculateResponsiveValue(7, 1),
      }}
      className="flex-column justify-center absolute items-center">
      <StyledText
        className="font-rubik font-extrabold text-black-100 leading-7"
        style={{fontSize: calculateResponsiveValue(28, 1)}}>
        {text}
      </StyledText>
      <StyledImage
        className="w-full"
        resizeMode="cover"
        style={{height: calculateResponsiveValue(11, 1)}}
        source={require('../../assets/brush/brush.png')}
      />
    </StyledView>
  );
}

export default BrushText;
