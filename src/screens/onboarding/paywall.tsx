import React from 'react';

import {ImageBackground, View} from 'react-native';
import {styled} from 'nativewind';
import Flexbox from '../../components/layout/flexbox';
import P from '../../components/text/p';
import FlatListSlider from '../../components/sliders/flatlist';
import {PREMIUM_ITEMS, PremiumTypes} from '../../constants';

interface PaywallItemProps {
  item: PremiumTypes;
}
const PaywalItem = (props: PaywallItemProps) => {
  const {item} = props;

  const SteyledView = styled(View);

  return (
    <SteyledView className="pr-4">
      <SteyledView className="h-32 w-40 bg-green-500 opacity-90 rounded-2xl px-4 pt-1 justify-between">
        <Flexbox>
          <SteyledView className="w-9 h-9 justify-center bg-black-100 rounded-lg items-center">
            {item.icon}
          </SteyledView>
        </Flexbox>
        <SteyledView className="mb-4 justify-between">
          <P nativewindStyle="text-white text-xl font-rubik font-medium">
            {item.title}
          </P>
          <P nativewindStyle="text-white text-sm font-white font-rubik opacity-70">
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
  return (
    <StyledView>
      <ImageContainer
        resizeMode="cover"
        className="flex h-5/6 justify-center"
        source={require('../../assets/paywall-bg/paywall-bg.png')}
      />
      <Flexbox
        nativewindStyle="absolute p-4 h-full w-full"
        justifyContent="center">
        <Flexbox direction="column">
          <P nativewindStyle="text-white text-2xl font-rubik font-light">
            <P nativewindStyle="text-white text-3xl font-rubik font-extrabold">
              PlantApp
            </P>{' '}
            Premium
          </P>
          <P nativewindStyle="text-white font-rubik pt-2 font-light text-lg opacity-70">
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
    </StyledView>
  );
}

export default Paywall;
