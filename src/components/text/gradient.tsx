import React, {PropsWithChildren} from 'react';

import {Text} from 'react-native';
import {styled} from 'nativewind';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

const StyledText = styled(Text);
const GradientContainer = styled(LinearGradient);

type GradientTextProps = PropsWithChildren & {
  colors: string[];
  nativewindStyle?: any;
  style?: any;
  start?: {x: number; y: number};
  end?: {x: number; y: number};
};

function GradientText({
  children,
  colors,
  style,
  start,
  end,
  nativewindStyle,
}: GradientTextProps) {
  return (
    // @ts-ignore
    <MaskedView
      maskElement={
        <StyledText style={style} className={nativewindStyle}>
          {children}
        </StyledText>
      }>
      <GradientContainer colors={colors} start={start} end={end}>
        <StyledText style={style} className={`${nativewindStyle} opacity-0`}>
          {children}
        </StyledText>
      </GradientContainer>
    </MaskedView>
  );
}

export default GradientText;
