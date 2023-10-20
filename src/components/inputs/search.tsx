import React from 'react';

import {TextInput as BaseInput, View, KeyboardTypeOptions} from 'react-native';
import {styled} from 'nativewind';
import Search from '../../assets/icons/search';

export type TextInputProps = {
  placeholder: string;
  onChange?: (e: any) => void;
  onChangeText?: (value: string) => void;
  value?: string;
  editable?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

export const StyledView = styled(View);
export const Input = styled(BaseInput);

function SearchInput({
  placeholder,
  onChange,
  value,
  keyboardType = 'default',
  editable = true,
}: TextInputProps): JSX.Element {
  return (
    <StyledView className="flex-row px-4 h-12 border-0.2 bg-white rounded-xl border-gray-300 opacity-88">
      <StyledView className="justify-center items-center">
        <Search />
      </StyledView>
      <StyledView className="justify-center">
        <Input
          placeholder={placeholder}
          className="flex text-gray-700 pl-3"
          placeholderTextColor="#AFAFAF"
          onChangeText={onChange}
          inputMode="text"
          value={value}
          editable={editable}
          keyboardType={keyboardType}
        />
      </StyledView>
    </StyledView>
  );
}

export default SearchInput;
