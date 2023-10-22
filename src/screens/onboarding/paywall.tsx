import React, {useState} from 'react';

import {ImageBackground, Platform, View} from 'react-native';
import {styled} from 'nativewind';
import Flexbox from '../../components/layout/flexbox';
import P from '../../components/text/p';
import FlatListSlider from '../../components/sliders/flatlist';
import calculateResponsiveValue, {
  PREMIUM_ITEMS,
  PREMIUM_OPTIONS,
  PremiumTypes,
} from '../../constants';
import CloseButton from '../../components/buttons/close';
import {useNavigation} from '@react-navigation/native';
import RadioButton from '../../components/inputs/radio';
import PrimaryButton from '../../components/buttons/primary';
import {useDispatch} from 'react-redux';
import {useFirstLaunch} from '../../data/hooks';
import {setFirstLaunch} from '../../data/slices/first-launch-slice';

interface PaywallItemProps {
  item: PremiumTypes;
}
const PaywalItem = (props: PaywallItemProps) => {
  const {item} = props;

  const StyledView = styled(View);

  return (
    <StyledView className="pr-4">
      <StyledView
        className="rounded-2xl px-4 pt-1 justify-between bg-green-600"
        style={{
          width: calculateResponsiveValue(156, 1),
          height: calculateResponsiveValue(130, 1),
        }}>
        <Flexbox>
          <StyledView
            className="justify-center bg-black-100 rounded-lg items-center"
            style={{
              width: calculateResponsiveValue(36, 1),
              height: calculateResponsiveValue(35, 1),
            }}>
            {item.icon}
          </StyledView>
        </Flexbox>
        <StyledView className="mb-4 justify-between">
          <P
            nativewindStyle="text-white font-rubik font-medium"
            style={{fontSize: calculateResponsiveValue(20, 1)}}>
            {item.title}
          </P>
          <P
            nativewindStyle="text-white font-white font-rubik opacity-70"
            style={{fontSize: calculateResponsiveValue(13, 1)}}>
            {item.description}
          </P>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

const ImageContainer = styled(ImageBackground);
const StyledView = styled(View);

function Paywall(): JSX.Element {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFirstLaunch = useFirstLaunch();

  const [selectedOption, setSelectedOption] = useState<string>('yearly');

  return (
    <StyledView className="flex h-full bg-green-300">
      <ImageContainer
        resizeMode="cover"
        className="flex justify-center"
        style={{height: calculateResponsiveValue(571, 1)}}
        source={require('../../assets/paywall-bg/paywall-bg.png')}>
        <Flexbox nativewindStyle="flex p-4 h-full w-full" direction="column">
          <Flexbox
            alignItems="flex-end"
            style={{
              top:
                Platform.OS === 'ios'
                  ? calculateResponsiveValue(50, 1)
                  : calculateResponsiveValue(30, 1),
            }}>
            <CloseButton
              onPress={() => {
                isFirstLaunch
                  ? (dispatch(setFirstLaunch(false)),
                    navigation.navigate('Home'))
                  : navigation.navigate('Home');
              }}
            />
          </Flexbox>
          <Flexbox
            nativewindStyle="flex-1"
            style={{
              marginTop: calculateResponsiveValue(150, 1),
              marginBottom: calculateResponsiveValue(100, 1),
            }}>
            <Flexbox direction="column">
              <P
                nativewindStyle="text-white font-rubik font-light"
                style={{fontSize: calculateResponsiveValue(27, 1)}}>
                <P
                  nativewindStyle="text-white text-3xl font-rubik font-extrabold"
                  style={{fontSize: calculateResponsiveValue(30, 1)}}>
                  PlantApp
                </P>
                Premium
              </P>
              <P
                nativewindStyle="text-white font-rubik pt-2 font-light opacity-70 bp-4"
                style={{fontSize: calculateResponsiveValue(17, 1)}}>
                Access All Features
              </P>
            </Flexbox>
            <Flexbox nativewindStyle="mb-4">
              <FlatListSlider
                horizontal={true}
                data={PREMIUM_ITEMS}
                renderItemComponent={item => <PaywalItem item={item} />}
              />
            </Flexbox>
            <StyledView>
              {PREMIUM_OPTIONS?.map((item, index) => (
                <StyledView className="pb-4" key={index}>
                  <RadioButton
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    value={item.value}
                    selectedValue={selectedOption}
                    onValueChange={setSelectedOption}
                  />
                </StyledView>
              ))}
            </StyledView>
            <Flexbox>
              <PrimaryButton>
                <P
                  style={{fontSize: calculateResponsiveValue(16, 1)}}
                  nativewindStyle="font-medium">
                  Try free for 3 days
                </P>
              </PrimaryButton>
              <P
                nativewindStyle="text-center text-gray-200 font-light pt-4"
                style={{fontSize: calculateResponsiveValue(9, 1)}}>
                After the 3-day free trial period you’ll be charged ₺274.99 per
                year unless you cancel before the trial expires. Yearly
                Subscription is Auto-Renewable
              </P>
              <P
                nativewindStyle="text-center text-gray-200 pt-4"
                style={{fontSize: calculateResponsiveValue(11, 1)}}>
                Terms • Privacy • Restore
              </P>
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </ImageContainer>
    </StyledView>
  );
}

export default Paywall;
