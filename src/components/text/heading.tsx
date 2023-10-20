import React from 'react';
import type {PropsWithChildren} from 'react';

import {styled} from 'nativewind';
import {Text} from 'react-native';

const StyledText = styled(Text);

function Heading({children}: PropsWithChildren) {
  return (
    <StyledText className="text-2xl font-rubik font-semibold text-gray-900 leading-7 pb-1">
      {children}
    </StyledText>
  );
}

export default Heading;
