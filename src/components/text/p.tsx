import React from 'react';
import type {PropsWithChildren} from 'react';

import {styled} from 'nativewind';
import {
  ImageStyle,
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

const StyledText = styled(Text);

type ParagraphProps = PropsWithChildren &
  TextProps & {
    nativewindStyle?: string;
    numberOfLines?: number;
    style?: StyleProp<ViewStyle | TextStyle | ImageStyle | any>;
  };

function P({children, nativewindStyle, numberOfLines, style}: ParagraphProps) {
  return (
    <StyledText
      style={style}
      className={nativewindStyle}
      numberOfLines={numberOfLines}>
      {children}
    </StyledText>
  );
}

export default P;
