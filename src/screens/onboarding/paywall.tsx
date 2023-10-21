import React from 'react';

import {ImageBackground, Platform, StatusBar, View} from 'react-native';
import {styled} from 'nativewind';
import Flexbox from '../../components/layout/flexbox';
import P from '../../components/text/p';
import FlatListSlider from '../../components/sliders/flatlist';
import calculateResponsiveValue, {
  PREMIUM_ITEMS,
  PremiumTypes,
} from '../../constants';
import CloseButton from '../../components/buttons/close';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface PaywallItemProps {
  item: PremiumTypes;
}
const PaywalItem = (props: PaywallItemProps) => {
  const {item} = props;

  const SteyledView = styled(View);

  return (
    <SteyledView className="pr-4">
      <SteyledView
        className="bg-green-500 opacity-90 rounded-2xl px-4 pt-1 justify-between"
        style={{
          width: calculateResponsiveValue(156, 1),
          height: calculateResponsiveValue(130, 1),
        }}>
        <Flexbox>
          <SteyledView
            className="justify-center bg-black-100 rounded-lg items-center"
            style={{
              width: calculateResponsiveValue(36, 1),
              height: calculateResponsiveValue(35, 1),
            }}>
            {item.icon}
          </SteyledView>
        </Flexbox>
        <SteyledView className="mb-4 justify-between">
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
        </SteyledView>
      </SteyledView>
    </SteyledView>
  );
};

const ImageContainer = styled(ImageBackground);
const StyledView = styled(View, 'flex h-full bg-green-300');

function Paywall() {
  const navigation = useNavigation();
  return (
    <StyledView>
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
            <CloseButton navigateTo={() => navigation.navigate('Home')} />
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
                </P>{' '}
                Premium
              </P>
              <P
                nativewindStyle="text-white font-rubik pt-2 font-light opacity-70"
                style={{fontSize: calculateResponsiveValue(17, 1)}}>
                Access All Features
              </P>
            </Flexbox>
            <Flexbox>
              <FlatListSlider
                horizontal={true}
                data={PREMIUM_ITEMS}
                renderItemComponent={item => <PaywalItem item={item} />}
              />
            </Flexbox>
          </Flexbox>
        </Flexbox>
      </ImageContainer>
    </StyledView>
  );
}

export default Paywall;
