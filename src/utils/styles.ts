import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
   flex: 1,
   padding: 16,
   gap: 8,
   backgroundColor: theme.colors.black,
  },
  text: {
   color: theme.colors.white,
   fontFamily: theme.fontFamily.medium
  }
})