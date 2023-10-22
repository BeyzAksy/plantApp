import {styled} from 'nativewind';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Close from '../../assets/icons/close';
import calculateResponsiveValue from '../../constants';

const Button = styled(TouchableOpacity);

const CloseButton = ({
  strokeColor = 'white',
  onPress,
}: {
  strokeColor?: string;
  onPress: (e?: any) => void;
}) => {
  return (
    <Button
      className="items-center justify-center bg-black-200 opacity-50 rounded-full"
      style={{
        width: calculateResponsiveValue(24, 1),
        height: calculateResponsiveValue(24, 1),
      }}
      onPress={onPress}>
      <Close
        stroke={strokeColor}
        color={strokeColor}
        strokeWidth={calculateResponsiveValue(1, 0.5)}
      />
    </Button>
  );
};

export default CloseButton;
