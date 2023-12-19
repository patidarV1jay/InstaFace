import React, { useState,useRef } from 'react';
import { Animated, TouchableOpacity, View, Text } from 'react-native';
import styles from './AnimationStyles';
import { move } from 'formik';

const Animation = () => {
  const leftValue = useState(new Animated.Value(0))[0];
  const opacity = useState(new Animated.Value(1))[0];
//   const value = useRef(0).current
//   console.log(value)
  const moveCircle = () => {
    Animated.timing(leftValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const initialPosition = () => {
    Animated.timing(leftValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadein = () => {
    Animated.timing(opacity, {
      toValue: 1,
      timing: 50000,
      useNativeDriver: true,
    }).start();
  };

  const fadeout = () => {
    Animated.timing(opacity, {
      toValue: 0,
      timing: 4000,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View
        onTouchEnd={moveCircle}
        style={[
          styles.circle,
          { transform: [{ translateX: leftValue }], opacity },
        ]}></Animated.View>
      <TouchableOpacity onPress={initialPosition}>
        <Text>Click</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadein}>
        <Text>FadeIn</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={fadeout}>
        <Text>FadeOut</Text>
      </TouchableOpacity>
      {/* <Animated.TouchableOpacity></Animated.TouchableOpacity> */}
    </View>
  );
};

export default Animation;
