import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {styled} from 'nativewind';
import P from '../../components/text/p';
import calculateResponsiveValue from '../../constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import PrimaryButton from '../../components/buttons/primary';
import {useNavigation} from '@react-navigation/native';

const Background = styled(ImageBackground);
const StyledImage = styled(Image);
const StyledView = styled(View);

function GetStarted(): JSX.Element {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Background
      className="flex-row justify-center h-full"
      resizeMethod="scale"
      resizeMode="cover"
      source={require('../../assets/onboarding-bg/onboarding-bg.png')}>
      <StyledView style={{paddingTop: calculateResponsiveValue(20, 1) + top}}>
        <StyledView className="px-6">
          <P
            style={{fontSize: calculateResponsiveValue(28, 1)}}
            nativewindStyle="font-normal">
            Welcome to <P nativewindStyle="font-bold">PlantAPP</P>
          </P>
          <StyledView className="max-w-xs">
            <P
              style={{fontSize: calculateResponsiveValue(16, 1)}}
              nativewindStyle="text-gray-400 pt-2">
              Identify more than 3000+ plants and 88% accuracy.
            </P>
          </StyledView>
        </StyledView>
        <StyledView className="justify-center items-center">
          <StyledImage
            source={require('../../assets/plant/plant.png')}
            style={{
              width: calculateResponsiveValue(375, 1),
              height: calculateResponsiveValue(499, 1),
            }}
            resizeMethod="scale"
            resizeMode="contain"
          />
        </StyledView>
        <StyledView className="px-6">
          <PrimaryButton onClick={() => navigation.navigate('Onboarding')}>
            <P
              style={{fontSize: calculateResponsiveValue(16, 1)}}
              nativewindStyle="font-medium">
              Get Started
            </P>
          </PrimaryButton>
        </StyledView>
        <StyledView>
          <P
            nativewindStyle="text-center text-gren-700 pt-4 font-light opacity-70"
            style={{fontSize: calculateResponsiveValue(11, 1)}}>
            By tapping next, you are agreeing to PlantID
          </P>
          <P
            nativewindStyle="text-center text-gren-700 pt-2 font-light opacity-70 underline"
            style={{fontSize: calculateResponsiveValue(11, 1)}}>
            Terms of Use & Privacy Policy.
          </P>
        </StyledView>
      </StyledView>
    </Background>
  );
}
export default GetStarted;
