import React, { useEffect } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface Props {
  currentCard: number;
  index: number;
  onPress: () => void;
}

export default function QueueButton({ currentCard, index, onPress }: Props) {
  const opacity = useSharedValue(currentCard === index ? 1 : 0.35);
  const width = useSharedValue(currentCard === index ? 50 : 12);

  useEffect(() => {
    opacity.value = withTiming(currentCard === index ? 1 : 0.35, { duration: 300 });
    width.value = withTiming(currentCard === index ? 50 : 12, { duration: 300 });
  }, [currentCard, index, opacity, width]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      width: width.value,
    };
  });

  return (
    <Pressable onPress={onPress}>
      <Animated.View style={[styles.dot, animatedStyles]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 12,
    backgroundColor: '#FCFCFC',
    borderRadius: 8,
    margin: 5,
  },
});
