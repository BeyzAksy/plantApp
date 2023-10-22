import React from 'react';
import type {PropsWithChildren} from 'react';

import {Text, TouchableOpacity} from 'react-native';
import {styled} from 'nativewind';
import calculateResponsiveValue from '../../constants';

const Button = styled(TouchableOpacity);
const ButtonContent = styled(Text);

type ButtonProps = PropsWithChildren & {
  onClick?: (e?: any) => void;
};

function PrimaryButton({children, onClick}: ButtonProps) {
  return (
    <Button
      className="rounded-2xl bg-green-400 w-full flex items-center justify-center font-medium"
      style={{height: calculateResponsiveValue(52, 1)}}
      onPress={onClick}>
      <ButtonContent className="text-white text-center">
        {children}
      </ButtonContent>
    </Button>
  );
}

export default PrimaryButton;
