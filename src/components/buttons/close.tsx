import {styled} from 'nativewind';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Close from '../../assets/icons/close';

const Button = styled(TouchableOpacity);

const CloseButton = ({
  strokeColor = 'white',
  navigateTo,
}: {
  strokeColor?: string;
  navigateTo: (e?: any) => void;
}) => {
  return (
    <Button
      className="items-center justify-center bg-black-200 rounded-full w-8 h-8"
      onPress={navigateTo}>
      <Close stroke={strokeColor} color={strokeColor} />
    </Button>
  );
};

export default CloseButton;
