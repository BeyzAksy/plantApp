import React, {PropsWithChildren} from 'react';

import {Text} from 'react-native';
import {styled} from 'nativewind';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';

const StyledText = styled(Text);
const GradientContainer = styled(LinearGradient);

type GradientTextProps = PropsWithChildren & {
  colors: string[];
  style?: any;
  start?: {x: number; y: number};
  end?: {x: number; y: number};
};

function GradientText(props: GradientTextProps) {
  return (
    // @ts-ignore
    <MaskedView maskElement={<StyledText {...props} className={props.style} />}>
      <GradientContainer
        colors={props.colors}
        start={props.start}
        end={props.end}>
        <StyledText {...props} className={`${props.style} opacity-0`} />
      </GradientContainer>
    </MaskedView>
  );
}

export default GradientText;
