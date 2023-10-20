import React from 'react';

import {View, ViewStyle, StyleProp} from 'react-native';
import {styled} from 'nativewind';

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
    flexDirection: direction,
    justifyContent: justifyContent,
    alignItems: alignItems,
    ...(style as object),
  };

  return (
    <StyledView style={containerStyle} className={`${nativewindStyle} py-3`}>
      {children}
    </StyledView>
  );
};

export default Flexbox;
