import { theme } from '@/src/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dot: {
    borderRadius: 30,
    backgroundColor: theme.colors.white,
    width: 12,
    height: 12
  },
  selected: {
    width: 50,
    opacity: 35
  }
})