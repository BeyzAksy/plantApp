import React from 'react';
import type {PropsWithChildren} from 'react';

import {styled} from 'nativewind';
import {Text} from 'react-native';

const StyledText = styled(Text);

type ParagraphProps = PropsWithChildren & {
  style?: string;
};

function P({children, style}: ParagraphProps) {
  return <StyledText className={style}>{children}</StyledText>;
}

export default P;
