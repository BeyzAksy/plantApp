import React from 'react';
import type {PropsWithChildren} from 'react';

import {styled} from 'nativewind';
import {ImageStyle, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';

const StyledText = styled(Text);

type ParagraphProps = PropsWithChildren & {
  nativewindStyle?: string;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle | any>;
};

function P({children, nativewindStyle, style}: ParagraphProps) {
  return (
    <StyledText style={style} className={nativewindStyle}>
      {children}
    </StyledText>
  );
}

export default P;
