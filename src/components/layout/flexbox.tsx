import React from 'react';

import {View, ViewStyle, StyleProp} from 'react-native';
import {styled} from 'nativewind';
import calculateResponsiveValue from '../../constants';

type FlexboxProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  nativewindStyle?: string;
  direction?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
};

const StyledView = styled(View);

const Flexbox: React.FC<FlexboxProps> = ({
  children,
  style,
  nativewindStyle,
  direction,
  justifyContent,
  alignItems,
}) => {
  const containerStyle: StyleProp<ViewStyle> = {
    paddingVertical: calculateResponsiveValue(12, 1),
    flexDirection: direction,
    justifyContent: justifyContent,
    alignItems: alignItems,
    ...(style as object),
  };

  return (
    <StyledView style={containerStyle} className={`${nativewindStyle}`}>
      {children}
    </StyledView>
  );
};

export default Flexbox;
