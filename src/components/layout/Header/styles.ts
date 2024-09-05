import { StyleSheet } from "react-native";
import { theme } from '@/theme';

export const styles = StyleSheet.create({
	container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 36,
    paddingTop: 16,
    alignItems: 'center',
		marginBottom: 44
  },
	title: {
		color: theme.colors.white,
		fontFamily: theme.fontFamily.regular,
		fontWeight: "600",
		fontSize: 20,
	},
});
