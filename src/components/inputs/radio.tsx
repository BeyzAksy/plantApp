import {styled} from 'nativewind';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import calculateResponsiveValue from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import P from '../text/p';

const RadioButtonContainer = styled(TouchableOpacity);
const StyledView = styled(View);
const GradientContainer = styled(LinearGradient);

type RadioButtonProps = {
  title: string;
  description: string;
  value: string;
  selectedValue: string;
  onValueChange: (value: string) => void;
};

const RadioButtonComponent: React.FC<RadioButtonProps> = ({
  title,
  description,
  value,
  selectedValue,
  onValueChange,
}) => {
  const isSelected = selectedValue === value;

  const handlePress = () => {
    onValueChange(value);
  };
  return (
    <RadioButtonContainer
      className={`flex-row w-full items-center rounded-2xl border-0.5  ${
        !isSelected ? 'border-mainborder' : ' border-green-400 '
      } px-4`}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderColor: 'rgba(255, 255, 255, 0.3)',
        height: calculateResponsiveValue(60, 1),
      }}
      onPress={handlePress}>
      {value === 'yearly' ? (
        <StyledView
          className="bg-green-400 absolute right-0 top-0 rounded-tr-2xl rounded-bl-2xl justify-center items-center px-3"
          style={{
            height: calculateResponsiveValue(26, 1),
          }}>
          <P
            nativewindStyle="text-white font-bold"
            style={{fontSize: calculateResponsiveValue(11, 1)}}>
            Save 50%
          </P>
        </StyledView>
      ) : null}
      <StyledView
        className="rounded-full justify-center items-center"
        style={[
          isSelected
            ? {backgroundColor: 'rgba(40, 175, 110, 1)'}
            : {backgroundColor: 'rgba(255, 255, 255, 0.05)'},
          {
            width: calculateResponsiveValue(24, 1),
            height: calculateResponsiveValue(24, 1),
          },
        ]}>
        {isSelected && (
          <StyledView
            className="bg-white rounded-full"
            style={{
              width: calculateResponsiveValue(8, 1),
              height: calculateResponsiveValue(8, 1),
            }}
          />
        )}
      </StyledView>
      <StyledView className="pl-3">
        <P
          style={{fontSize: calculateResponsiveValue(16, 1)}}
          nativewindStyle="text-white font-bold">
          {title}
        </P>
        <P
          style={{fontSize: calculateResponsiveValue(12, 1)}}
          nativewindStyle="text-white font-light opacity-70">
          {description}
        </P>
      </StyledView>
    </RadioButtonContainer>
  );
};

const RadioButton: React.FC<RadioButtonProps> = ({
  title,
  description,
  value,
  selectedValue,
  onValueChange,
}) => {
  return (
    <>
      {selectedValue === value ? (
        <GradientContainer
          colors={[
            'rgba(0, 0, 0, 0.05)',
            'rgba(0, 0, 0, 0.01)',
            'rgba(40, 175, 110, 0.168)',
            'rgba(40, 175, 110, 0.1)',
          ]}
          className="w-full items-center rounded-2xl border-0.5"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.3)',
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <RadioButtonComponent
            title={title}
            description={description}
            value={value}
            selectedValue={selectedValue}
            onValueChange={onValueChange}
          />
        </GradientContainer>
      ) : (
        <RadioButtonComponent
          title={title}
          description={description}
          value={value}
          selectedValue={selectedValue}
          onValueChange={onValueChange}
        />
      )}
    </>
  );
};

export default RadioButton;
