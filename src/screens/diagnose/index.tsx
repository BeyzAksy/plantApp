import React from 'react';
import {View} from 'react-native';
import Lottie from 'lottie-react-native';

const Diagnose = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
      }}>
      <Lottie
        style={{flex: 1, transform: [{scale: 0.5}]}}
        source={require('../../assets/animation/plant.json')}
        autoPlay
        loop
        resizeMode="cover"
      />
    </View>
  );
};

export default Diagnose;
