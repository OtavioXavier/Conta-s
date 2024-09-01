import { theme } from '@/src/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
		width: 300,
		height: 200,
		borderRadius: 16,
		shadowColor: theme.colors.black,
		shadowOffset: {
			width: 0,
			height: 18,
		},
		shadowOpacity: 0.25,
		shadowRadius: 20.0,
		elevation: 24,
	},
	flag: {
		width: 44,
		height: 44,
		objectFit: "cover",
	},
	lastNumbers: {
		fontFamily: theme.fontFamily.black,
		fontSize: 12,
		color: theme.colors.white,
		paddingRight: 16,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	logo: {
		width: 54,
		height: 54,
	},
	containerLogo: {
		width: "100%",
		alignItems: "center",
		marginTop: 20,
	},
	name: {
		color: theme.colors.white,
		fontFamily: theme.fontFamily.regular,
		fontSize: 12,
	},
	validate: {
		color: theme.colors.white,
		fontFamily: theme.fontFamily.medium,
		fontSize: 12,
	},
	footer: {
		marginTop: 28,
		marginLeft: 12,
	},
})