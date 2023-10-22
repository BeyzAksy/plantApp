import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import calculateResponsiveValue from '../../constants';
import PrimaryButton from '../../components/buttons/primary';
import P from '../../components/text/p';
import {styled} from 'nativewind';
import FirstSlide from './first-slide';
import SecondSlide from './second-slide';

const StyledView = styled(View);

const Onboarding = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const swiperRef = useRef<Swiper | null>(null);
  const navigation = useNavigation();

  const onPress = () => {
    if (swiperRef.current && activeSlide !== 1) {
      swiperRef.current.scrollBy(activeSlide + 1);
    } else {
      navigation.navigate('Paywall');
    }
  };

  return (
    <View style={{flex: 1}}>
      <Swiper
        ref={swiperRef}
        loop={false}
        onIndexChanged={setActiveSlide}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        activeDotColor="#13231B">
        <FirstSlide />
        <SecondSlide />
      </Swiper>
      <StyledView className="absolute px-6" style={styles.buttonContainer}>
        <PrimaryButton onClick={onPress}>
          <P
            style={{fontSize: calculateResponsiveValue(16, 1)}}
            nativewindStyle="font-medium">
            Continue
          </P>
        </PrimaryButton>
      </StyledView>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  dotStyle: {
    backgroundColor: '#13231B40',
    width: 6,
    height: 6,
    borderRadius: 6,
  },
  activeDotStyle: {
    borderColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 6,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 90,
    left: 0,
    right: 0,
  },
});
